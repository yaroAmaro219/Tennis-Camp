Rails.application.routes.draw do
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

  match '*path', via: [:options], to: lambda {|_| [204, { 'Content-Type' => 'text/plain' }]}

  resources :coaches do 
    resources :sessions
  end

  resources :users do
    resources :children
  end

  resources :children do 
    resources :sessions
  end

  get '/profile/:id', to: 'posts#show'
  post '/auth/login', to: 'authentication#login'
	get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
