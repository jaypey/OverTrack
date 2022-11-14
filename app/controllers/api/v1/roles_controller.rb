module Api; module V1
    class RolesController < BaseController
      def index
        render json: Role.all()
      end
      def update
        budget_user = ::BudgetUser.where(user_id: params[:user_id], budget_id: params[:budget_id]).take
        current_user = ::BudgetUser.where(user_id: cookies.signed[:user_id], budget_id: params[:budget_id]).take
        

        render json: nil, status: 403 and return if current_user.role_value > 1
        render json: nil, status: 408 and return if current_user.user_id == budget_user.user_id

        successful = budget_user.update(role_value: params[:id])
        render json: budget_user, status: successful ? 200 : 500
      end
    end
  end; end
  