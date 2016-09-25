Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	resources :mgmts
	resources :abouts
	resources :homes
	resources :menus
  resources :events
	resources :users
	get '/login', to: 'users#login'
	patch '/login', to: 'users#verify'
	post '/login', to: 'users#verify'
	get '/mgmt', to: 'events#index'
	get '/', to: 'front_end#index'
end
