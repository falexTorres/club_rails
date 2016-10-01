class FrontEndMailer < ApplicationMailer
	default from: 'EventRegistration@TheClub.com'

	def send_email
		mail(to: "zachsfhsem@gmail.com", subject: "event rsvp")
	end
end
