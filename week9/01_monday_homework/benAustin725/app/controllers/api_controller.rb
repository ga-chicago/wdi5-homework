class ApiController < ApplicationController

# this is only needed to view our DB. otherwise you totally don't need a view.
  get '/' do
    @users = User.all
    @users.to_json
  end

  post '/' do 
    def create 
      @user = User.new(params[:user])
      @user.password = params[:password]
      @user.save!
    end
    # p params
    # @user = User.create username: params["username"], 
    #                     password: params["password"]
    # @user.save!
  'fortunes api worked...'
  end


end
