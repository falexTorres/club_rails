class CreateAbouts < ActiveRecord::Migration[5.0]
  def change
    create_table :abouts do |t|
			t.string :title_1
			t.string :title_2
			t.string :title_3
			t.string :title_4
			t.string :title_5
			t.string :title_6			

			t.string :content_1
			t.string :content_2
			t.string :content_3
			t.string :content_4
			t.string :content_5
			t.string :content_6

      t.timestamps
    end
  end
end
