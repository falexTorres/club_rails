class CreateMenus < ActiveRecord::Migration[5.0]
  def change
    create_table :menus do |t|
			t.string :food1
			t.string :food2
			t.string :food3
			t.string :food4
			t.string :food5

			t.string :beer1_1
			t.string :beer1_2
			t.string :beer1_3
			t.string :beer1_4
			t.string :beer1_5
			t.string :beer2_1
			t.string :beer2_2
			t.string :beer2_3
			t.string :beer2_4
			t.string :beer2_5
			t.string :beer3_1
			t.string :beer3_2
			t.string :beer3_3
			t.string :beer3_4
			t.string :beer3_5
				
			t.string :wine1_1
			t.string :wine1_2
			t.string :wine1_3
			t.string :wine1_4
			t.string :wine1_5
			t.string :wine2_1
			t.string :wine2_2
			t.string :wine2_3
			t.string :wine2_4
			t.string :wine2_5
			t.string :wine3_1
			t.string :wine3_2
			t.string :wine3_3
			t.string :wine3_4
			t.string :wine3_5
		
			t.string :food1Desc
			t.string :food2Desc
			t.string :food3Desc
			t.string :food4Desc
			t.string :food5Desc

			t.string :beer1_1Desc
			t.string :beer1_2Desc
			t.string :beer1_3Desc
			t.string :beer1_4Desc
			t.string :beer1_5Desc
			t.string :beer2_1Desc
			t.string :beer2_2Desc
			t.string :beer2_3Desc
			t.string :beer2_4Desc
			t.string :beer2_5Desc
			t.string :beer3_1Desc
			t.string :beer3_2Desc
			t.string :beer3_3Desc
			t.string :beer3_4Desc
			t.string :beer3_5Desc
			
			t.string :wine1_1Desc
			t.string :wine1_2Desc
			t.string :wine1_3Desc
			t.string :wine1_4Desc
			t.string :wine1_5Desc
			t.string :wine2_1Desc
			t.string :wine2_2Desc
			t.string :wine2_3Desc
			t.string :wine2_4Desc
			t.string :wine2_5Desc
			t.string :wine3_1Desc
			t.string :wine3_2Desc
			t.string :wine3_3Desc
			t.string :wine3_4Desc
			t.string :wine3_5Desc
			
			t.string :beer1_1Path
			t.string :beer1_2Path
			t.string :beer1_3Path
			t.string :beer1_4Path
			t.string :beer1_5Path
			t.string :beer2_1Path
			t.string :beer2_2Path
			t.string :beer2_3Path
			t.string :beer2_4Path
			t.string :beer2_5Path
			t.string :beer3_1Path
			t.string :beer3_2Path
			t.string :beer3_3Path
			t.string :beer3_4Path
			t.string :beer3_5Path
			
			t.string :wine1_1Path
			t.string :wine1_2Path
			t.string :wine1_3Path
			t.string :wine1_4Path
			t.string :wine1_5Path
			t.string :wine2_1Path
			t.string :wine2_2Path
			t.string :wine2_3Path
			t.string :wine2_4Path
			t.string :wine2_5Path
			t.string :wine3_1Path
			t.string :wine3_2Path
			t.string :wine3_3Path
			t.string :wine3_4Path

      t.timestamps
    end
  end
end
