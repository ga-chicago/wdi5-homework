class HomeController < ApplicationController 
  get '/kitten' do
    local_hash = { :name => 'kitten', :cuteness => 'extreme', :habitat => 'land', :picture_url => 'http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg', :description => 'baby cat' }.to_json
    erb :main, locals: {local_hash: local_hash}
  end

  get '/puppy' do
    local_hash = { :name => 'puppy', :cuteness => 'maximum', :habitat => 'land', :picture_url => 'http://www.thelabradorsite.com/wp-content/uploads/2013/04/when-to-call-vet.jpg', :description => 'baby cat' }.to_json
    erb :main, locals: {local_hash: local_hash}
  end
  
  get '/hummingbird' do
    local_hash = { :name => 'hummingbird', :cuteness => 'very', :habitat => 'land', :picture_url => 'http://mediad.publicbroadcasting.net/p/wcai/files/201604/Broad-Billed_Hummingbird_003.jpg', :description => 'baby cat' }.to_json
    erb :main, locals: {local_hash: local_hash}
  end
  
  get '/ladybug' do
    local_hash = { :name => 'ladybug', :cuteness => 'slight to very', :habitat => 'land', :picture_url => 'https://www.wildgratitude.com/wp-content/uploads/2015/07/ladybug-spirit-animal.jpg', :description => 'baby cat' }.to_json
    erb :main, locals: {local_hash: local_hash}
  end

  get '/minnow' do
    local_hash = { :name => 'minnow', :cuteness => 'slight to none', :habitat => 'water', :picture_url => 'http://www.dgcampfire.com/aquarium/pic/4011-whitecloud_minnow.jpg', :description => 'baby cat' }.to_json
    erb :main, locals: {local_hash: local_hash}
  end

  get '/?' do
    local_hash = { :name => 'small animals', :message => "root route of HomeController for small animals server" }.to_json 
    erb :main, locals: {local_hash: local_hash}
  end

end 
