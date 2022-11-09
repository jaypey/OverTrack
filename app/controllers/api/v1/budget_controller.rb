module Api; module V1
    class BudgetController < BaseController
        include Rails.application.routes.url_helpers

        def index 
            render json: User.find(cookies.signed[:user_id]).budgets.to_json(include: {users: { only: [:firstname, :lastname, :email, :id]}})
        end

        def create
            user = User.find(cookies.signed[:user_id])
            budget = ::Budget.new(name: params[:name], description: params[:description], owner_id: cookies.signed[:user_id])
            successful = budget.save
            budget.users << user
            successful = budget.save
            BudgetUser.where(budget_id: budget.id, user_id: user.id).first().update(confirmed: true)
            render json: budget, status: successful ? 200 : 500
        end

        def update
            budget = ::Budget.find(params[:id])
            successful = budget.update(name: params[:name], description: params[:description], owner_id: cookies.signed[:user_id])
            render json: budget, status: successful ? 200 : 500
        end

        def destroy
            budget = ::Budget.find(params[:id])
            successful = budget.destroy
            render json: nil, status: successful ? 200 : 500
        end

        def adduser
            budget = ::Budget.includes(:users).find(params[:budgetid])
            userAdd = ::User.find_by(email: params[:email])
            userAdder = ::User.find(cookies.signed[:user_id])
            
            render json: nil, status: 408 and return if budget.users.include?(userAdd)
            render json: nil, status: 409 and return if userAdd == nil



            budget.users << userAdd
            successful = budget.save

            if successful
                userToken = SecureRandom.uuid
                confUrl = request.host_with_port + '/confirmation'+ '?token='+userToken
                successful = budget.budget_users.where(user_id: userAdd.id).first().update(token: userToken)
                UserMailer.with(invitedBudget: budget, recipientUser: userAdd, senderUser: userAdder, confirmationUrl: confUrl).budget_invite.deliver_later
            end

            render json: budget, status: successful ? 200 : 500
        end

        def removeuser
            budget = ::Budget.find(params[:id])
            budget.users.delete(budget.users.find(params[:userid]))
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

        

    end
end; end