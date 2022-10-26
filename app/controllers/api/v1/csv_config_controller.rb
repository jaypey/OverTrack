module Api; module V1
  class CsvConfigController < BaseController
    def create
        csvconfig = ::CsvConfig.new(name: params[:name], config_json: params[:config_json])
        successful = csvconfig.save
        render json: csvconfig, status: successful ? 200 : 500
    end
  end
end; end
