module Api; module V1
  class CsvConfigController < BaseController
    def index
      csvconfigs = CsvConfig.where(users_id: cookies.signed[:user_id]);
      render json: csvconfigs
    end
    def create
        csvconfig = ::CsvConfig.new(name: params[:name],users_id: cookies.signed[:user_id], config_json: params[:config_json])
        successful = csvconfig.save
        render json: csvconfig, status: successful ? 200 : 500
    end
    def destroy
      csvconfig = ::CsvConfig.find(params[:id])
      successful = csvconfig.destroy
      render json: params[:id], status: successful ? 200 : 500
    end
  end
end; end
