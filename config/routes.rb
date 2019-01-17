Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :countries
    end
  end

end
