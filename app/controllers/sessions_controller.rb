class SessionsController < ApplicationController
  skip_before_action :require_login, only: [:new, :create]
  before_action :require_no_login, only: [:new, :create]

  def new
  end

  def create

    email = params[:email]

    user = User.where(email: email).first

    unless user
      # flash[:error] = "No user found"
      redirect_to :root and return
    end

    if BCrypt::Password.new(user.password) == params[:password] && user.email == params[:email]
      cookies.signed[:logged_in] = true
    else
      flash[:error] = "Incorrect login"
    end

    redirect_to :root
  end

  def logout
    cookies.signed[:logged_in] = false
    redirect_to :root
  end
end
