module Api; module V1
  class CsvConfigController < BaseController
    def create
        csvconfig = ::CsvConfig.new(name: params[:name],users_id: cookies.signed[:user_id], config_json: params[:config_json])
        successful = csvconfig.save
        render json: csvconfig, status: successful ? 200 : 500
    end
  end
end; end
