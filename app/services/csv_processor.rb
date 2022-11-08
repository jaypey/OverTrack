class CsvProcessor
  def initialize(csv_rows, csv_config, default_category_id = nil, default_income_category_id = nil, cookies)
    @csv_rows = csv_rows
    @config = csv_config
    @default_category_id = default_category_id
    @default_income_category_id = default_income_category_id
    @categories_ids_by_lower_name = Category.where({budget_id: cookies.signed[:selectedBudget]}).index_by { |c| c.name.to_s.downcase }.transform_values { |c| c.id }
  end

  def process!
    output = []
    @csv_rows.each_with_index do |row, i|
      next if skip_row?(row, i)
      output << process_row(row)
    end
    output
  end

  private

  def description_index
    @config.dig('descriptions', 'index').to_i || raise('Missing description index')
  end

  def category_index
    @config.dig('categories', 'index').to_i || raise('Missing category index')
  end

  def date_index
    @config.dig('timestamps', 'index').to_i || raise('Missing date index')
  end

  def description_substrings_to_ignore
    @config.dig('descriptions', 'ignore_substrings') || []
  end

  def category_mappings
    @config.dig('categories', 'mappings') || {}
  end

  def spends_index
    @config.dig('spends', 'index').to_i || raise('Missing spends index')
  end

  def skip_non_spend
    @config.dig('spends', 'skip_non_spend') || false
  end

  def incomes_index
    @config.dig('incomes', 'index').to_i || raise('Missing incomes index')
  end

  def skip_non_income
    @config.dig('incomes', 'skip_non_income') || false
  end

  def has_header
    @config['has_header'] || false
  end

  def skip_row?(row, index)
    if index == 0 && has_header
      return true
    end

    if description_substrings_to_ignore.any? { |str| row[description_index].include? str }
      return true
    end

    if skip_non_spend && row[spends_index].to_f <= 0
      return true
    end

    if skip_non_income && row[incomes_index].to_f <= 0
      return true
    end

    false
  end

  def process_row(row)
    date = row[date_index]
    description = row[description_index]
    is_spend = false
    
    if row[spends_index].to_f > 0 
      amount = row[spends_index]
      is_spend = true
    else
      amount = row[incomes_index]
      is_spend = false
    end
  
    category_id = get_category_id(row, is_spend)

    {
      paid_at: Chronic.parse(date),
      description: description,
      category_id: category_id,
      amount: (amount.to_f * 100).abs,
      is_spend: is_spend,
    }
  end

  def get_category_id(row, is_spend)
    category = row[category_index]
    mapped_category = category_mappings[category] || category

    if is_spend
      return @categories_ids_by_lower_name[mapped_category.to_s.downcase] || @default_category_id
    else
      return @categories_ids_by_lower_name[mapped_category.to_s.downcase] || @default_income_category_id
    end
  end

  def format_description(s)
    desc = s.gsub(/(\W|\d)/, ' ') # strip non word chars
    desc = desc.gsub(/\s+/, ' ').strip # normalize multiple spaces
    desc = desc.split.map { |d| d.to_s.downcase.capitalize }.join(' ') # titleize
    desc
  end
end
