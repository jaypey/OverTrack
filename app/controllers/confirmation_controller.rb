class ConfirmationController < ActionController::Base

    def index
        budgetUser = BudgetUser.find_by(token: params[:token])
        if budgetUser == nil
            render status: 422
        else
            successful = budgetUser.update(confirmed: true);
        end
    end

    def account
        user = User.find_by(token: params[:token])
        if user == nil
            render status: 422
        else
            user.confirmed = true
            successful = user.save(:validate => false)
        end
    end
  end
  