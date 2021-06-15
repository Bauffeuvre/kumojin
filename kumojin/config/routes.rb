Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/api/v1' do
    get '/pages', to: 'pages#get_tokyo_time'
  end
end
