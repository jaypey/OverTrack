require 'csv'

class ExpenseUploadsController < ApplicationController
  def new
    @categories = ::Category.where({budget_id: cookies.signed[:selectedBudget]}).order(:name)
    @csv_configs = ::CsvConfig.where({users_id: cookies.signed[:user_id]}).or(CsvConfig.where(users_id: nil)).order(:name)

    @auto_detect_data = @csv_configs.map do |c|
      config = JSON.parse(c.config_json)
      filename_substring = config.dig('auto_detect', 'filename_substring')
      default_category = config.dig('auto_detect', 'default_category')
      next unless filename_substring && default_category

      {
        filename_substring: filename_substring,
        csv_config_id: c.id,
        default_category_id: @categories.find { |c| c.name == default_category }&.id
      }
    end.compact
  end

  def preview
    default_category_id = params[:default_category_id].to_i
    default_income_category_id = params[:default_income_category_id].to_i

    skip_existing = params[:skip_existing]
    csv_config = CsvConfig.find(params[:csv_config_id])
    config_hash = JSON.parse(csv_config.config_json)
    file_contents = File.read(params[:file].tempfile)
    csv = CSV.parse(file_contents)

    processed_csv = CsvProcessor.new(csv, config_hash, default_category_id, default_income_category_id, cookies).process!

    rows = []
    processed_csv.each do |data|
      amount = data[:amount]
      paid_at = data[:paid_at]
      description = data[:description]
      category_id = data[:category_id]
      is_spend = data[:is_spend]

      next if is_spend && skip_existing && Expense.exists?({amount: amount, paid_at: paid_at, description: description})
      next if !is_spend && skip_existing && Revenue.exists?({amount: amount, paid_at: paid_at, description: description})

      rows << { amount: amount, paid_at: paid_at, description: description, category_id: category_id, is_spend: is_spend }
    end

    @categories = Category.where({budget_id: cookies.signed[:selectedBudget]}).order(:name).to_json
    @rows = rows.to_json
  end

  def create_config
  end

  def config_list
  end
end
