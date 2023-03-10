module Api; module V1
    class BudgetController < BaseController
        include Rails.application.routes.url_helpers

        def index
            render json: User.find(cookies.signed[:user_id]).budgets.to_json(:include => {:budget_users => {:include => {:user => {:only => [:firstname, :lastname, :email, :id]}}}})
        end

        def create
            user = User.find(cookies.signed[:user_id])
            budget = ::Budget.new(name: params[:name], description: params[:description], owner_id: cookies.signed[:user_id])
            successful = budget.save
            budget.users << user
            successful = budget.save
            BudgetUser.where(budget_id: budget.id, user_id: user.id).first().update(confirmed: true, role_value: 1)
            render json: budget, status: successful ? 200 : 500
        end

        def update
            budget = ::Budget.find(params[:id])
            budget_user = ::BudgetUser.where(user_id: cookies.signed[:user_id], budget_id: budget.id).take

            render json: nil, status: 403 and return if budget_user.role_value > 1

            successful = budget.update(name: params[:name], description: params[:description], owner_id: cookies.signed[:user_id])
            render json: budget, status: successful ? 200 : 500
        end

        def destroy
            budget = ::Budget.find(params[:id])
            budget_user = ::BudgetUser.where(user_id: cookies.signed[:user_id], budget_id: budget.id).take

            render json: nil, status: 403 and return if budget_user.role_value > 1
            render json: nil, status: 408 and return if budget.is_base_budget == true
            
            successful = budget.destroy
            render json: nil, status: successful ? 200 : 500
        end

        def adduser
            budget = ::Budget.includes(:users).find(params[:budgetid])
            userAdd = ::User.find_by(email: params[:email])
            userAdder = ::User.find(cookies.signed[:user_id])
            budget_user = ::BudgetUser.where(user_id: cookies.signed[:user_id], budget_id: budget.id).take
            
            render json: nil, status: 408 and return if budget.users.include?(userAdd)
            render json: nil, status: 409 and return if userAdd == nil
            render json: nil, status: 403 and return if budget_user.role_value > 1



            budget.users << userAdd
            successful = budget.save

            if successful
                userToken = SecureRandom.uuid
                confUrl = request.host_with_port + '/confirmation'+ '?token='+userToken
                successful = budget.budget_users.where(user_id: userAdd.id).first().update(token: userToken, role_value: 3)
                UserMailer.with(invitedBudget: budget, recipientUser: userAdd, senderUser: userAdder, confirmationUrl: confUrl).budget_invite.deliver_later
            end

            render json: budget, status: successful ? 200 : 500
        end

        def removeuser
            budget = ::Budget.find(params[:id])
            budget_user = ::BudgetUser.where(user_id: cookies.signed[:user_id], budget_id: budget.id).take

            render json: nil, status: 403 and return if budget_user.role_value > 1
            render json: nil, status: 409 and return if budget_user.user_id == params[:userid]

            budget.users.delete(budget.users.find(params[:userid]))
            successful = budget.save
            render json: budget, status: successful ? 200 : 500
        end

        def leavebudget
            budget = ::Budget.find(params[:id])
            budget_user = ::BudgetUser.where(user_id: cookies.signed[:user_id], budget_id: budget.id).take

            render json: nil, status: 403 and return if budget_user.role_value <= 1

            budget.users.delete(budget.users.find(cookies.signed[:user_id]))
            successful = budget.save
            render json: budget, status: successful ? 200 : 500
        end

        def selectbudget
            cookies.signed[:selectedBudget] = params[:id]
            render json: nil, status: 200
        end

        def getbudgetid
            budget = ::Budget.find(cookies.signed[:selectedBudget])
            successful = false
            if budget != nil
                successful = true
            end
            render json: budget.id, status: successful ? 200 : 500
        end

        def getcurrentbudgetrole
            budget_user = ::BudgetUser.where(user_id: cookies.signed[:user_id], budget_id: cookies.signed[:selectedBudget]).take
            successful = false
            if budget_user != nil
                successful = true
            end
            render json: budget_user, status: successful ? 200 : 500
        end

        def getcurrentuserid
            user = ::User.find(cookies.signed[:user_id])
            successful = false
            if user != nil
                successful = true
            end
            render json: user.id, status: successful ? 200 : 500
        end
        
        def getnotconfirmedbudgets
            budgetsss = ::BudgetUser.where(user_id: cookies.signed[:user_id])
            newBudgets = budgetsss.where(confirmed: false)
            successful = false
            if newBudgets != nil
                successful = true
            end
            render json: newBudgets, status: successful ? 200 : 500
        end
    end
end; end