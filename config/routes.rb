Rails.application.routes.draw do
  default_url_options :host => "localhost:3000"

  root to: "sessions#new"

  resources :sessions, only: [:new, :create] do
    get :logout, on: :collection
  end

  resources :dashboard, only: [:index]
  resources :confirmation, only: [:index] do
    get :account, on: :collection
    get :reset, on: :collection
  end
  resources :insights, only: [:index]
  resources :expenses, only: [:index]
  resources :expense_uploads, only: [:new] do
    collection do
      post :preview
      get :create_config
      get :config_list
    end
  end

  namespace :api do
    namespace :v1 do
      resources :expenses, only: [:index, :create, :destroy, :update] do
        collection do
          post :bulk_create
        end
      end
      resources :csv_config, only: [:index, :create, :destroy, :update, :show]
      
      resources :task, only: [:index, :create, :update, :destroy] do
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

      resources :roles, only: [:index, :update] do
        
      end

      resources :revenues do
        get :index, on: :collection
        post :create, on: :collection
        post :bulk_create, on: :collection
        post :destroy, on: :collection
        post :update, on: :collection
      end

      resources :budget, only: [:index, :create, :update, :destroy] do
        collection do
          post :adduser
          post :removeuser
          post :leavebudget
          get :listBudgets
          post :selectbudget
          get :getbudgetid
          get :getcurrentuserid
          get :getnotconfirmedbudgets
          get :getcurrentbudgetrole
        end
      end

      resources :user, only: [:index, :update] do
      end
    end
  end

  post 'reset/forgot', to: 'reset#forgot'
  post 'reset/reset', to: 'reset#reset'

  get "budget", to: "budget#index"
  get "projections", to: "projections#index"
  get "tasks", to: "tasks#index"

  get 'user/register', to: 'user#register', as: 'register_user' # new
  get 'user/confirm', to: 'user#confirm', as: 'confirm_user' #confirm
  post 'user', to: 'user#create' # create
  get "user", to: "user#index"
  get 'user/forgot', to: 'user#forgot' # forgor 
  get 'user/reset', to: 'user#reset' # reset 

  get "/404", to: "errors#not_found"
  get "/422", to: "errors#not_found"
  get "/500", to: "errors#not_found"
end
