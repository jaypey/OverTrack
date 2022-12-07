class UserController < ApplicationController
    skip_before_action :require_login, only: [:create, :register, :forgot, :reset, :confirm]
    before_action :require_no_login, only: [:create, :register, :forgot, :reset, :confirm]
  
    def confirm

    end

    def register
        newUser = User.new
        respond_to do |format|
            format.html { render :register, locals: {user: newUser}}
        end
    end

    def create
        user = User.new(params.require(:user).permit(:email, :firstname, :lastname, :phone, :password, :password_confirmation))
        user.confirmed = false
        user.token = SecureRandom.uuid
        respond_to do |format|
            format.html do
                if user.save


                    confUrl = request.host_with_port + '/confirmation/account'+ '?token='+user.token
                    UserMailer.with(userToConfirm: user, confirmationUrl: confUrl).user_confirm.deliver_later


                    initialBudget = ::Budget.new(name: user.firstname + "'s budget", description: "Your own personal budget", owner_id: user.id, is_base_budget: true)
                    initialBudget.users << user
                    successful = initialBudget.save
                    BudgetUser.where(budget_id: initialBudget.id, user_id: user.id).first().update(confirmed: true, role_value: 1)
                    if !successful
                        flash[:error] = "Error: Initial budget could not be created"
                        render :register, locals: { user: user}
                    else
                        flash[:success] = "User created successfully"
                        redirect_to :confirm_user
                    end
                else
                    render :register, locals: { user: user }
                end
            end
        end
    end

    def index
        
    end

    def forgot
    
    end

    def reset
        if !params[:token].blank?
            @token = params[:token]
        end
    end
end
  