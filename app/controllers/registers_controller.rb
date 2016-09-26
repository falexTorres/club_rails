class RegistersController < ApplicationController

	def email
	end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.permit(:email_input)
    end

end
