class CreateAboutsEntry < ActiveRecord::Migration[5.0]
	def change 
		About.create :title_1 => 'Title 1', :title_2 => 'Title 2', :title_3 => '    Title 3', :title_4 => 'Title 4', :title_5 => 'Title 6', :content_1 => 'I am     content 1 text.', :content_2 => 'I am content 2 text.', :content_3 => 'I am content 3 text.', :content_4 => 'I am content 4 text.', :content_5 => 'I am content 5 text.', :content_6 => 'I am content 6 text.'
	end
end

