class ApiController < ApplicationController

# this is only needed to view our DB. otherwise you totally don't need a view.
  get '/' do
    @fortunes = Fortune.all
    @fortunes.to_json
  end

  post '/' do 
    p params
    @fortunes = Fortune.create month: params["month"], 
                               day: params["day"], 
                               year: params["year"], 
                               blood: params["blood"], 
                               siblings: params["siblings"]
  'fortunes api worked...'
  end


end
