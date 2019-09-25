Rails.application.routes.draw do
  resources :pizza_toppings, only: [:new, :create]
  resources :toppings, only: [:new, :create, :index, :show, :destroy]
  
  resources :pizzas
  # resources :pizzas creates thses routes:
  # get "/pizzas", to: "pizzas#index", as: "pizzas"
  # get "/pizzas/new", to: "pizzas#new", as: "new_pizza"
  # post "/pizzas", to: "pizzas#create"
  # get "/pizzas/:id", to: "pizzas#show", as: "pizza"
  # get "/pizzas/:id/edit", to: "pizzas#edit", as: "edit_pizza"
  # patch "/pizzas/:id", to: "pizzas#update"
  # delete "/pizzas/:id", to: "pizzas#destroy"
end
