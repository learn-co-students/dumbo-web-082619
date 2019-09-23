Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :students #, except: [:index, :show]
  # get '/students', to: "students#index"
  # get '/students/:id', to: "students#show"
  # get '/students/new', to: "students#new"
  # get '/students/:id/edit', to: "students#edit"
  # post '/students', to: "students#create"
  # put '/students/:id', to: "students#update"
  # delete '/students/:id', to: "students#destroy"
end
