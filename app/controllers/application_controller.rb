class ApplicationController < ActionController::API
  include ActionController::MimeResponds

  def set_studio
    @studio = Studio.find(params[:id])
  end

  def fallback_index_html
  	respond_to do |format|
  	  # format.html { render body: Rails.root.join('public/index.html').read }
  	  format.html { render file: "public/index.html" }
  	end
  end
end
