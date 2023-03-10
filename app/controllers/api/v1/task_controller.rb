module Api; module V1
    class TaskController < ApplicationController
        def index
            render json: ::Task.where({budget_id: cookies.signed[:selectedBudget]}).order(:is_done, :due_date, :title)
            # add .order(:due_date)
        end

        def create
            budget = ::Budget.find(cookies.signed[:selectedBudget])

            budget_user = ::BudgetUser.where(user_id: cookies.signed[:user_id], budget_id: budget.id).take
            render json: nil, status: 403 and return if budget_user.role_value > 1

            task = ::Task.new(is_done: false, title: params[:title], description: params[:description], due_date: params[:due_date], category_id: params[:category_id], budget_id: budget.id)
            successful = task.save
            render json: task, status: successful ? 200 : 500
        end

        def update
            task = ::Task.find(params[:id])

            budget_user = ::BudgetUser.where(user_id: cookies.signed[:user_id], budget_id: cookies.signed[:selectedBudget]).take
            render json: nil, status: 403 and return if budget_user.role_value > 1

            successful = task.update(
                is_done: params.fetch(:is_done, task.is_done),
                title: params.fetch(:title, task.title),
                description: params.fetch(:description, task.description),
                due_date: params.fetch(:due_date, task.due_date), 
                category_id: params.fetch(:category_id, task.category_id),
            )
            render json: task, status: successful ? 200 : 500
        end

        def destroy
            task = ::Task.find(params[:id])

            budget_user = ::BudgetUser.where(user_id: cookies.signed[:user_id], budget_id: cookies.signed[:selectedBudget]).take
            render json: nil, status: 403 and return if budget_user.role_value > 1
            successful = task.destroy
            render json: nil, status: successful ? 200 : 500
        end
    end
end; end
