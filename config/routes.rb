Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :cities, only: [:show, :index] do
      resources :events, only: [:index]
    end
    resources :events, only: [:create, :destroy, :update, :user_events]
    resources :attendances, only: [:create, :destroy]
  end

  get 'events/user_events', :to => 'events#user_events'

  root "static_pages#root"
end
