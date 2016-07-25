class ApiController < ApplicationController

  get '/' do
    @tacos = Taco.all
    @tacos.to_json
  end  
  post '/' do

    p params
    @taco = Taco.create name: params["name"], meat: params["meat"], cheese: params["cheese"]
    
  end
end
