class CreateHomesEntry < ActiveRecord::Migration[5.0]
	def change 
		Home.create :title_1 => 'Title 1', :content_1 => 'I am content 1 text.', :hours_thursday => '7:00pm-11:00pm', :hours_friday => '7:00pm-11:00pm', :hours_saturday => '7:00pm-11:00pm'
	end
end

