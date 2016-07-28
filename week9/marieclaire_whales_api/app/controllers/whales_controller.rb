class WhalesController < ApplicationController
  

  get '/:id/?' do |id|
    # get whale by id
    whale = Whale.find id
    if whale
      whale.to_json
    else
      { status: 'error', message: 'No whale found by that id found' }.to_json
    end
  end


  patch '/:id/?' do |id|
    # Update a single whale's information
    whale = Whale.find id
    whale.update name: params['name'] || whale.name, lifespan: params['lifespan'] || whale.lifespan, ocean: params['ocean'] || whale.ocean

    { status: 'ok', message: 'whale updated'}.to_json
  end

  

  delete '/:id/?' do |id|
    # Delete a whale
    whale = Whale.find id
    if whale
      whale.destroy
      { status: 'ok', message: 'whale deleted' }.to_json
    else
      { status: 'error', message: 'Cannot delete whale' }.to_json
    end
  end


  
  get '/?' do
    # Return list of all whales
    whales = Whale.all
    if whales
      whales.to_json
    else
      { status: 'error', message: 'No whales found' }.to_json
    end
  end

  

  post '/?' do
    # Create a new whale
    whale = Whale.create name: params['name'], lifespan: params['lifespan'], ocean: params['ocean']

    if whale
      { status: 'ok', message:'New whale created'}.to_json
    else
      { status: 'error', message: 'Could not save whale'}.to_json
    end
  end
end
