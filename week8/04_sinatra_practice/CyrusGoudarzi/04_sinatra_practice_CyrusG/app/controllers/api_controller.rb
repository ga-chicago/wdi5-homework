class ApiController < ApplicationController
  get '/?' do
    @users = User.all
    @users.to_json
  end

  post '/?' do
  p params
  @user = User.create username: params["username"], password: params["password"]
  'user api call worked'
  end 
  
end
