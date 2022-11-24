module Api; module V1
  class CsvConfigController < BaseController
    def index
      csvconfigs = CsvConfig.where(users_id: cookies.signed[:user_id]);
      render json: csvconfigs
    end
    def create
        csvconfig = ::CsvConfig.new(name: params[:name],users_id: cookies.signed[:user_id], config_json: params[:config_json])
        puts "FPJODSJFIODJSOPJFOPIDSJOIFJ"
        puts params[:config_json]
        successful = csvconfig.save
        render json: csvconfig, status: successful ? 200 : 500
    end
    def destroy
      csvconfig = ::CsvConfig.where(users_id: cookies.signed[:user_id])
      csvconfig = csvconfig.find(params[:id])
      successful = csvconfig.destroy
      render json: params[:id], status: successful ? 200 : 500
    end
    
    def update
      csvconfig = ::CsvConfig.where(users_id: cookies.signed[:user_id])
      csvconfig = csvconfig.find(params[:id])
      puts params[:config_json]
      successful = csvconfig.update!(
        name: params[:name],
        config_json: params[:config_json]
      )
      render json: csvconfig, status: successful ? 200 : 500
    end

    def show 
      csvconfig = ::CsvConfig.where(users_id: cookies.signed[:user_id])
      csvconfig = csvconfig.find(params[:id])
      render json: csvconfig
    end
  end
end; end
