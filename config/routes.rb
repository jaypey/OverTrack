Rails.application.routes.draw do
  root to: "sessions#new"

  resources :sessions, only: [:new, :create] do
    get :logout, on: :collection
  end

  resources :dashboard, only: [:index]
  resources :insights, only: [:index]
  resources :expenses, only: [:index]
  resources :expense_uploads, only: [:new] do
    collection do
      post :preview
    end
  end

  namespace :api do
    namespace :v1 do
      resources :expenses, only: [:index, :create, :destroy, :update] do
        collection do
          post :bulk_create
        end
      end
      
      resources :categories, only: [:index, :create, :update, :destroy] do
        collection do
          get :listExpenses
          get :listRevenues
        end
      end

      resources :reports do
        get :year, on: :collection
        get :month, on: :collection
      end

      resources :goals, only: [:index] do
        put :update, on: :collection
      end

      resources :revenues do
        get :index, on: :collection
        post :create, on: :collection
        post :destroy, on: :collection
        post :update, on: :collection
      end

      resources :budget, only: [:index, :create, :update, :destroy] do
        collection do
          get :listBudgets
          post :selectbudget
          get :getbudgetname
        end
      end
      #get "/revenues", to: "/revenues#index"
      #post "/revenues", to: "/revenues#create"
      #post "/revenues", to: "/revenues#destroy"
      #post "/revenues", to: "/revenues#update"
    end
  end

  
  get "budget", to: "budget#index"
  get 'user/register', to: 'user#register', as: 'register_user' # new
  post 'user', to: 'user#create' # create
  get "/404", to: "errors#not_found"
  get "/422", to: "errors#not_found"
  get "/500", to: "errors#not_found"
end
