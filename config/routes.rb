Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :experiences, only: [:create, :destroy], defaults: {format: :json}
  get "/site", to: "users#home"
  get "/current", to: "users#user", defaults: {format: :json}
  get "/user/:id", to: "users#profile_user", defaults: {format: :json}
  put "/current", to: "users#update_current"
  post "request/:id", to: "requests#create"
  post "/request/destroy/:senderid/:responderid", to: "requests#destroy"
  post "/connections/:id1/:id2", to: "connections#create"
  root "site#root"
end
