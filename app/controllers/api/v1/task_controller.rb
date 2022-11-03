module Api; module V1
class TaskController < ApplicationController
    def index
        render json: ::Task.where({budget_id: cookies.signed[:selectedBudget]}).order(:name)
    end

    def create
        task = ::Task.new(is_done: false, title: params[:title], description: params[:description], due_date: params[:due_date], category_id: params[:category_id], budgets_id: cookies.signed[:selectedBudget])
        successful = task.save
        render json: task, status: successful ? 200 : 500
    end

    def update
        task = ::Task.find(params[:id])
        successful = task.update(is_done: params[:is_done], title: params[:title], description: params[:description], due_date: params[:due_date], category_id: params[:category_id])
        render json: task, status: successful ? 200 : 500
    end

    def destroy
        task = ::Task.find(params[:id])  
        successful = task.destroy
        render json: nil, status: successful ? 200 : 500
    end
end
