class SessionsController < ApplicationController
  skip_before_action :require_login, only: [:new, :create, :register]
  before_action :require_no_login, only: [:new, :create, :register]

  def new
  end

  def register
  end

  def create

    email = params[:email]

    user = User.includes(:budget_users).where(email: email).first

    unless user
      flash[:error] = "Incorrect login"
      redirect_to :root and return
    end

    if user.authenticate(params[:password])
      cookies.signed[:logged_in] = true
      cookies.signed[:user_id] = user.id
      cookies.signed[:selectedBudget] = user.budget_users.first().budget.id
      
    else
      flash[:error] = "Incorrect login"
    end

    redirect_to :root
  end

  def logout
    cookies.signed[:logged_in] = false
    cookies.delete :user_id
    cookies.delete :selectedBudget
    redirect_to :root
  end
end
