Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :registrations, only: [:create]
      resources :sessions, only: [:create] 
      # Удаление токена происходит на стороне клиента, а его проверка в middleware слое

      resources :passwords do
        collection do
          post :reset
          post :update
        end
      end

      resources :users, only: [:show, :update, :destroy]
    end
  end

  get "up" => "rails/health#show", as: :rails_health_check
end
