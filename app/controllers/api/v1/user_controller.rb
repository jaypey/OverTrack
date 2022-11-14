module Api; module V1
    class UserController < BaseController
        def index 
            render json: User.find(cookies.signed[:user_id]).to_json(only: [:firstname, :lastname, :email, :id, :phone])
        end

        def update
            if !(params[:phone].match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/))
                render json: nil, status: 502 and return
            end

            user = ::User.find(params[:id])
            successful = user.update(firstname: params[:firstname], lastname: params[:lastname], phone: params[:phone])
            render json: user, status: successful ? 200 : 501
        end
    end
end; end