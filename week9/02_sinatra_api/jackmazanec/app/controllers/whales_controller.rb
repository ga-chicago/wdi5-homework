class WhalesController < ApplicationController

  get '/:id/?' do |id|
    whale = Whale.find id

    if whale
      whale.to_json
    else
      { status: 'error', message: 'No whale by that ID found' }.to_json
    end
  end

  patch '/:id/?' do |id|

    whale = Whale.find id

    whale.update length: params['length'], weight: params['weight'], name: params["name"]

    { status: 'ok', message: 'whale updated' }.to_json
  end

  delete '/:id/?' do |id|

    whale = Whale.find id

    if whale
      whale.destroy
      { status: 'ok', message: 'Whale deleted' }.to_json
    else
      { status: 'error', message: 'Cannot delete whale' }.to_json
    end
  end


  get '/?' do

    whales = Whale.all

    if whales
      whales.to_json
    else
      { status: 'error', message: 'No whales found' }.to_json
    end

  end

  ##
  # POST /
  ##
  post '/?' do

    whale = Whale.create length: params['length'], weight: params['weight'], name: params["name"]

    if whale
      { status: 'ok', message: 'New whale created' }.to_json
    else
      { status: 'error', message: 'Could not save whale' }.to_json
    end
  end
end
