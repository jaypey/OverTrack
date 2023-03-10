module Api; module V1
  class ReportsController < BaseController
    def year
      total = ActiveRecord::Base.connection.execute(%{
        select sum(expenses.amount) as amount
        from expenses
        join categories on expenses.category_id = categories.id
        where paid_at >= '#{params[:year].to_i}-01-01'
        and paid_at < '#{params[:year].to_i + 1}-01-01'
        and budget_id = '#{cookies.signed[:selectedBudget]}'
      }).first['amount']

      category_percentages = ActiveRecord::Base.connection.execute(%{
        select categories.name AS category, sum(expenses.amount) / #{total.to_f} AS percentage
        from expenses
        join categories on expenses.category_id = categories.id
        where paid_at >= '#{params[:year].to_i}-01-01'
        and paid_at < '#{params[:year].to_i + 1}-01-01'
        and budget_id = '#{cookies.signed[:selectedBudget]}'
        group by categories.id
        order by percentage;
      })

      category_totals = ActiveRecord::Base.connection.execute(%{
        select categories.name AS category, sum(expenses.amount) AS amount, categories.color as color
        from expenses
        join categories on expenses.category_id = categories.id
        where paid_at >= '#{params[:year].to_i}-01-01'
        and paid_at < '#{params[:year].to_i + 1}-01-01'
        and budget_id = '#{cookies.signed[:selectedBudget]}'
        group by categories.id
        order by amount desc;
      })

      category_amounts_by_month = ActiveRecord::Base.connection.execute(%{
        select categories.name AS category, to_char(date_trunc('month', paid_at), 'Mon') AS month, sum(expenses.amount) AS amount
        from expenses
        join categories on expenses.category_id = categories.id
        where paid_at >= '#{params[:year].to_i}-01-01'
        and paid_at < '#{params[:year].to_i + 1}-01-01'
        and budget_id = '#{cookies.signed[:selectedBudget]}'
        group by month, categories.id
        order by categories.rank asc, categories.id asc
      })

      render json: {
        category_percentages: category_percentages,
        category_totals: category_totals,
        category_amounts_by_month: category_amounts_by_month,
        category_averages_for_year: average_by_category(params[:year].to_i),
        total: total,
        categories: Category.where(budget_id: cookies.signed[:selectedBudget]).select(:id, :name, :color).order(:name)
      }
    end

    def month
      start_date = Date.strptime(params[:month], '%B %Y')
      end_date = start_date + 1.month

      barChart_query = "
        select categories.name AS category, categories.monthly_goal as monthly_goal, sum(expenses.amount) AS spend
        from expenses
        join categories on expenses.category_id = categories.id
        where paid_at >= '#{start_date}'
        and paid_at < '#{end_date}'
        and budget_id = '#{cookies.signed[:selectedBudget]}'
        group by categories.rank, categories.id
        order by categories.rank asc, categories.id asc";
        
      pieChart_query = "(
        select categories.name AS category, categories.color AS color, sum(expenses.amount)/100 AS spend 
        from expenses 
        join categories on expenses.category_id = categories.id 
        where paid_at >= '#{start_date}' 
        and paid_at < '#{end_date}'
        and budget_id = '#{cookies.signed[:selectedBudget]}'
        group by categories.rank, categories.id 
        order by categories.rank asc, categories.id asc) 
        UNION ALL
        (select 'remaining' AS category, '#eee' AS color, (sum(revenues.amount)/100 - sum(expenses.amount)/100) AS spend 
        from categories 
        inner join expenses on categories.id = expenses.category_id 
        inner join revenues on categories.id = revenues.category_id
        where budget_id = '#{cookies.signed[:selectedBudget]}'
        having (sum(revenues.amount)/100 - sum(expenses.amount)/100) >= 0)";
        
      category_totals = ActiveRecord::Base.connection.execute(barChart_query)

      category_pourcentage = ActiveRecord::Base.connection.execute(pieChart_query)



      averages = average_by_category(start_date.year)

      expensesTotal = Expense.where("paid_at >= '#{start_date}' and paid_at < '#{end_date}'")
      expensesTotal = expensesTotal.where(category_id: ::Category.where(budget_id: cookies.signed[:selectedBudget]).ids).sum(:amount)

      render json: {
        category_totals: category_totals,
        category_pourcentage: category_pourcentage,
        category_averages_for_year: average_by_category(start_date.year),
        total: expensesTotal,
        monthly_goal: User.first.monthly_goal
      }
    end

    private

    def average_by_category(year)
      months_to_average = year == Date.today.year ? Date.today.month - 1 : 12
      start_date = Date.new(year, 1, 1)
      end_date = start_date + months_to_average.month

      category_totals = ActiveRecord::Base.connection.execute(%{
        select categories.name AS category, sum(expenses.amount) AS amount
        from expenses
        join categories on expenses.category_id = categories.id
        where paid_at >= '#{start_date}'
        and paid_at < '#{end_date}'
        and budget_id = '#{cookies.signed[:selectedBudget]}'
        group by categories.id
      })


      total_sum = 0
      averages = category_totals.map do |c|
        total_sum += c['amount']
        { category: c['category'], amount: (c['amount'] / months_to_average.to_f).round }
      end

      averages << { category: 'All', amount: (total_sum / months_to_average.to_f).round }

      { averages:averages, start_date: start_date, end_date: end_date - 1.second }
    end
  end
end; end
