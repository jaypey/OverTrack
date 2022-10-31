class UserController < ApplicationController
    skip_before_action :require_login, only: [:create, :register]
    before_action :require_no_login, only: [:create, :register]
  
    def register
        newUser = User.new
        respond_to do |format|
            format.html { render :register, locals: {user: newUser}}
        end
    end

    def create
        user = User.new(params.require(:user).permit(:email, :firstname, :lastname, :phone, :password, :password_confirmation))
        respond_to do |format|
            format.html do
                if user.save
                    initialBudget = ::Budget.new(name: user.firstname + "'s budget", description: "Your own personal budget", owner_id: user.id)
                    initialBudget.users << user
                    successful = initialBudget.save
                    if !successful
                        flash[:error] = "Error: Initial budget could not be created"
                        render :register, locals: { user: user}
                    else
                        flash[:success] = "User created successfully"
                        redirect_to :root
                    end
                else
                    render :register, locals: { user: user }
                end
            end
          end
      end
end
  