class UsersController < ApplicationController
	before_action :set_user
	layout 'users.html.erb'

	def login
	end

	def verify
		@user = User.find("1")
		un = params[:user][:username]
		pw = params[:user][:password]

		if (@user.username == un) && (@user.password == pw)
			session['user'] = @user
			redirect_to "/mgmt"
		else
			flash['notice'] = "username/password invalid"
			redirect_to "/login"
		end
		# if valid redirect to /mgmt
		# else return with errors	
	end

	def logout
		reset_session
	end
	
  private
		def set_user
			@user = User.new
		end
    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:username, :password)
    end

end
