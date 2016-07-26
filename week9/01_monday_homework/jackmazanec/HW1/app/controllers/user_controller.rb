class UserController < ApplicationController

  get '/' do
    @user = User.all
    @user.to_json
  end  

  post '/' do
    password = BCrypt::Password.create(params["password"])
    user = User.create username: params["username"], password: password
  end
end
