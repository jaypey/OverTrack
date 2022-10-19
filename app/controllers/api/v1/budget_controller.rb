module Api; module V1
    class BudgetController < BaseController
        def index 
            render json: User.find(params[:id]).budgets
        end

        def create
            budget = ::Budget.new(name: params[:name], description: params[:description], owner_id: params[:owner_id])
            successful = budget.save
            render json: budget, status: successful ? 200 : 500
        end

        def update
            budget = ::Budget.find(params[:id])
            successful = budget.update(name: params[:name], description: params[:description], owner_id: params[:owner_id])
            render json: budget, status: successful ? 200 : 500
        end

        def destroy
            budget = ::Budget.find(params[:id])
            successful = budget.destroy
            render json: nil, status: successful ? 200 : 500
        end

        def adduser
            budget = ::Budget.find(params[:id])
            budget.users << ::User.find(params[:userid])
            successful = budget.save
            render json: budget, status: successful ? 200 : 500
        end

        def removeuser
            budget = ::Budget.find(params[:id])
            budget.users.delete(budget.users.find(params[:userid]))
            successful = budget.save
            render json: budget, status: successful ? 200 : 500
        end

    end
end; end