class HomeController < ApplicationController

  get '/api' do 
    params.to_json
  end

  get '/?' do
    erb :home
  end

  post '/?' do |month, day, year, blood, siblings|
    fortune = Fortune.create month: month, day: day, year: year, blood: blood, siblings: siblings
    if fortune
      puts 'fortune was created'
    else
      puts 'there ws an error creating user'
    end
  end

end
