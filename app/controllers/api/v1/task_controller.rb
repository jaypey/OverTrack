module Api; module V1
class TaskController < ApplicationController
    def index
        tasks = ::Task.all
        render json: tasks
    end
end
