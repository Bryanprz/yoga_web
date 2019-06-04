module Api::V1
  class StudiosController < ApplicationController
    before_action :set_studio, only: [:show, :update, :destroy]
    # GET /studios/1
    def show
      render json: @studio
    end
  end
end

