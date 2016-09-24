class CreateHomes < ActiveRecord::Migration[5.0]
  def change
    create_table :homes do |t|
			t.string :title_1
			t.string :content_1			
			t.string :hours_thursday
			t.string :hours_friday
			t.string :hours_saturday			

      t.timestamps
    end
  end
end
