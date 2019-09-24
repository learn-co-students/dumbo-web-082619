Rails.application.routes.draw do
  resources :toppings, only: [:new, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get "/pizzas", to: "pizzas#index"
  # get "/pizzas/:id", to: "pizzas#show"
  # get "/pizzas/:id/edit", to: "pizzas#edit", as: "sausage_pizza"

  resources :pizzas



end
