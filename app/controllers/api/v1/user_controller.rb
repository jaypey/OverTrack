module Api; module V1
    class UserController < BaseController
        def index 
            render json: User.find(cookies.signed[:user_id]).to_json(only: [:firstname, :lastname, :email, :id, :phone])
        end
    end
end; end