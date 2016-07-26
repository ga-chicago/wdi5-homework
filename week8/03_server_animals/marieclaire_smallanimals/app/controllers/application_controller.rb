class ApplicationController < Sinatra::Base
  set :views, File.dirname(__FILE__) + '/../views'
  set :public_folder, File.dirname(__FILE__) + '/../public'

  get '/?' do
    @title = 'Small Animals'
    erb :home  
  end
end
