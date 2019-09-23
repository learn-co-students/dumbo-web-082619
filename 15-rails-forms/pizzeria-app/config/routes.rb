Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get "/pizzas", to: "pizzas#index"
  # get "/pizzas/:id", to: "pizzas#show", as: "something_random"
  resources :pizzas, only: [:index, :show, :new, :create]

end
