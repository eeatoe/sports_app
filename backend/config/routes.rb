Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:create] do
        collection do
          delete :logout
          get :check
        end
      end

      resources :registrations, only: [:create]
      resource :user, only: [:show, :update, :destroy]
    end
  end


  get "up" => "rails/health#show", as: :rails_health_check
end
