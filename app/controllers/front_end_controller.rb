class FrontEndController < ApplicationController
	layout "application.html.erb"
	def index
		@events = Event.all
		@home = Home.find("1")
		@about = About.find("1")
		@menu = Menu.find("1")
	end
end
