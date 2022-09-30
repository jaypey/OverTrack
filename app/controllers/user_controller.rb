class UserController < ApplicationController
    skip_before_action :require_login, only: [:create, :register]
    before_action :require_no_login, only: [:create, :register]
  
    def register
    end
end
  