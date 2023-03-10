module Api; module V1
  class CategoriesController < BaseController
    def index
      render json: ::Category.where({budget_id: cookies.signed[:selectedBudget]}).order(:name)
    end
    
    def listExpenses
      categories = ::Category.where({is_revenue: 0, budget_id: cookies.signed[:selectedBudget]}).order(:name)
      render json: categories
    end

    def listRevenues
      categories = ::Category.where({is_revenue: 1, budget_id: cookies.signed[:selectedBudget]}).order(:name)
      render json: categories
    end

    def create
      budget_user = ::BudgetUser.where(user_id: cookies.signed[:user_id], budget_id: cookies.signed[:selectedBudget]).take
      
      render json: nil, status: 403 and return if budget_user.role_value > 2

      category = ::Category.new(color: params[:color], name: params[:name], monthly_goal: params[:monthly_goal], is_revenue: params[:is_revenue], budget_id: cookies.signed[:selectedBudget])
      successful = category.save
      render json: category, status: successful ? 200 : 500
    end

    def update
      category = ::Category.find(params[:id])
      budget_user = ::BudgetUser.where(user_id: cookies.signed[:user_id], budget_id: cookies.signed[:selectedBudget]).take
      
      render json: nil, status: 403 and return if budget_user.role_value > 2

      successful = category.update(color: params[:color], name: params[:name], monthly_goal: params[:monthly_goal])
      render json: category, status: successful ? 200 : 500
    end

    def destroy
      category = ::Category.find(params[:id])
      budget_user = ::BudgetUser.where(user_id: cookies.signed[:user_id], budget_id: cookies.signed[:selectedBudget]).take
      
      render json: nil, status: 403 and return if budget_user.role_value > 2
      render json: nil, status: 409 and return if category.expenses.length > 0

      successful = category.destroy
      render json: nil, status: successful ? 200 : 500
    end
  end
end; end
