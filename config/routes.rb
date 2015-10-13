Rails.application.routes.draw do
  root to: 'static_pages#index'

  namespace :api, defaults: { format: :json } do
    resources :photos, only: [:create, :destroy, :index, :show, :update]
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  # resources :photos
  # resources :tags
end
