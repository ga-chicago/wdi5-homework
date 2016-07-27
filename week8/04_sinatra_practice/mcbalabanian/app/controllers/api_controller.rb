class ApiController < ApplicationController

get '/events' do
  Event.all().to_json 
end

 get '/' do
  erb :someform
end 

post '/' do
  event = Event.create(date: params[:date], band: params[:band], venue: params[:venue]) 
  erb :home  
end

 
end
