class ApplicationController < ActionController::API
  def set_studio
    @studio = Studio.find(params[:id])
  end

  def fallback_index_html
    render :file => 'public/index.html'
  end
end
