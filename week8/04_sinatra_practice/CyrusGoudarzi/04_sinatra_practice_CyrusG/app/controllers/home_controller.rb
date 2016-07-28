class HomeController < ApplicationController
  get '/?' do
    @home = User.all
    @home.to_json
    erb :home
  end
  
  
  
end
