class WhalesController < ApplicationController
  # GET /whales/:id
  get '/:id/?' do |id|
    # Returns individual user info
    whale = Whale.find id

    if whale
      whale.to_json
    else
      {status: 'error', message: 'No user by that ID found'}.to_json
    end

  end

  # PATCH /whales/id
  patch '/:id/?' do |id|
    # Update a single whale
    whale = Whale.find id

    whale.update type: params['type'] || user.type, diet: params['diet'] || whale.diet, image_url: params['image_url'] || whale.image_url

    { status: 'ok', message: 'whale updated' }
  end
  # DELETE /whales/id
  delete '/:id/?' do |id|
    # Delete a single whale
    whale = Whale.find id

    if whale 
      Whale.destroy
      { status: 'ok', message: 'Whale deleted'}.to_json
    else
      { status: 'error', message: 'cannot delete whale'}.to_json
    end
  end

  # GET /whales/
  get '/?' do
    # Return list of all whales
    whale = Whale.all

    if whale
      whale.to_json
    else
      { status: 'error', message: 'No whales found' }.to_json
    end
  end

  # POST /whales/
  post '/?' do
    # Creates a new whale
    whale = Whale.create type: params['type'], diet: params['diet'], image_url: params["image_url"]

    if whale
      whale.to_json
    else
      { status: 'error', message: 'Could not save whale'}.to_json
    end
  end
end
