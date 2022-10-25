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
                    flash[:success] = "User created successfully"
                    redirect_to :root
                else
                    render :register, locals: { user: user }
                end
            end
          end
      end
end
  