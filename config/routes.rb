Rails.application.routes.draw do
  root 'hello#index'
  resources :todo, only: :index
  resources :users, only: :index
end
