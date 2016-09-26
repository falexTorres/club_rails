class AddToMenus < ActiveRecord::Migration[5.0]
  def change
			add_column :menus, :food1_price, :string
			add_column :menus, :food2_price, :string
			add_column :menus, :food3_price, :string
			add_column :menus, :food4_price, :string
			add_column :menus, :food5_price, :string

			add_column :menus, :beer1_1_price, :string
			add_column :menus, :beer1_2_price, :string
			add_column :menus, :beer1_3_price, :string
			add_column :menus, :beer1_4_price, :string
			add_column :menus, :beer1_5_price, :string
			add_column :menus, :beer2_1_price, :string
			add_column :menus, :beer2_2_price, :string
			add_column :menus, :beer2_3_price, :string
			add_column :menus, :beer2_4_price, :string
			add_column :menus, :beer2_5_price, :string
			add_column :menus, :beer3_1_price, :string
			add_column :menus, :beer3_2_price, :string
			add_column :menus, :beer3_3_price, :string
			add_column :menus, :beer3_4_price, :string
			add_column :menus, :beer3_5_price, :string

			add_column :menus, :wine1_1_price, :string
			add_column :menus, :wine1_2_price, :string
			add_column :menus, :wine1_3_price, :string
			add_column :menus, :wine1_4_price, :string
			add_column :menus, :wine1_5_price, :string
			add_column :menus, :wine2_1_price, :string
			add_column :menus, :wine2_2_price, :string
			add_column :menus, :wine2_3_price, :string
			add_column :menus, :wine2_4_price, :string
			add_column :menus, :wine2_5_price, :string
			add_column :menus, :wine3_1_price, :string
			add_column :menus, :wine3_2_price, :string
			add_column :menus, :wine3_3_price, :string
			add_column :menus, :wine3_4_price, :string
			add_column :menus, :wine3_5_price, :string

		@menu = Menu.where(id: 1).update_all(
			food1_price: '$1.00',
     	food2_price: '$1.00',
			 food3_price: '$1.00',
			 food4_price: '$1.00',
			 food5_price: '$1.00',

			 beer1_1_price: '$1.00',
			 beer1_2_price: '$1.00',
			 beer1_3_price: '$1.00',
			 beer1_4_price: '$1.00',
			 beer1_5_price: '$1.00',
			 beer2_1_price: '$1.00',
			 beer2_2_price: '$1.00',
			 beer2_3_price: '$1.00',
			 beer2_4_price: '$1.00',
			 beer2_5_price: '$1.00',
			 beer3_1_price: '$1.00',
			 beer3_2_price: '$1.00',
			 beer3_3_price: '$1.00',
			 beer3_4_price: '$1.00',
			 beer3_5_price: '$1.00',

			 wine1_1_price: '$1.00',
			 wine1_2_price: '$1.00',
			 wine1_3_price: '$1.00',
			 wine1_4_price: '$1.00',
			 wine1_5_price: '$1.00',
			 wine2_1_price: '$1.00',
			 wine2_2_price: '$1.00',
			 wine2_3_price: '$1.00',
			 wine2_4_price: '$1.00',
			 wine2_5_price: '$1.00',
			 wine3_1_price: '$1.00',
			 wine3_2_price: '$1.00',
			 wine3_3_price: '$1.00',
			 wine3_4_price: '$1.00',
			 wine3_5_price: '$1.00')
  end
end 
