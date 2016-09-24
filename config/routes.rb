Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	resources :mgmts
	resources :abouts
	resources :homes
	resources :menus
  resources :events
	get '/', to: 'front_end#index'
	get '/mgmt', to: 'events#index'
end
