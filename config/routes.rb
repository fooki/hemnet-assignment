Rails.application.routes.draw do
  namespace :api, constraints: { format: 'json' }, defaults: { format: 'json' } do
    namespace :v1 do
      resources :quotes, only: :index
    end
  end

  root to: 'application#show'
end
