class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
	
	def authenticate
		if session['user'].nil?
			session['initial_uri'] = request.url
			redirect_to "/login"
		end
	end

end
