class CreateUsers < ActiveRecord::Migration
	def change
		create_table :users do |t|
			t.string :username
			t.string :password
			t.timestamps
		end

		User.create :username => 'admUN4tc', :password => 'M@dera2202'
	end

end

