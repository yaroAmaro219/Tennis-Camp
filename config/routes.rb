Rails.application.routes.draw do
  resources :states
  resources :order_items
  resources :orders
  resources :sessions
  resources :coaches
  resources :children
  resources :locations
  resources :reviews
  resources :users
  resources :enrolls

  resources :locations do
    resources :sessions
  end

  resources :coaches do 
    resources :sessions
  end

  resources :users do
    resources :children
  end

  resources :children do 
    resources :sessions
  end

  post 'orders/neworder', to: 'orders#neworder'
  patch 'orders/shipping/:id', to: 'orders#shipping'
  patch 'users/order_complete/:id', to: 'users#order_complete'
  get '/', to: 'locations#show'
  get '/login', to: 'authentication#login'
  get 'locations/:id', to: 'sessions#show'
  get '/profile/:id', to: 'posts#show'
  post '/auth/login', to: 'authentication#login'
	get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
