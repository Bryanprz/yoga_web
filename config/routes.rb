Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  # TODO delete this if this works with just grqphiql route
  #namespace :api do
    #namespace :v1 do
      #resources :items
      #resources :lists
      #resources :studios, only: [:show]
      #resources :klasses, only: [:index]
    #end
  #end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
