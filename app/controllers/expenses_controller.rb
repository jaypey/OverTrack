class ExpensesController < ApplicationController
  def index
    @category_id = params[:category_id].to_json
    @has_data = Expense.count > 0
    @categories = Category.where(budget_id: cookies.signed[:selectedBudget]).order(:name).to_json
  end
end
