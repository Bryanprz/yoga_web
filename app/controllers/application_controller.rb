class ApplicationController < ActionController::API
  def set_studio
    @studio = Studio.find(params[:id])
  end
end
