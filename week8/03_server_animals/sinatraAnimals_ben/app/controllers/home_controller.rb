class HomeController < ApplicationController
# name cuteness habitat picture url description

  get '/puppies' do
    {
      :name => 'puppy',
      :cuteness => 8,
      :habitat => 'backyard',
      :url => 'http://www.puppiesinflorida.com/wp-content/uploads/2016/07/Puppies_for_sale_in_florida.jpg',
      :description => 'a baby dog'
    }.to_json
  end

  get '/kitties' do
    { :name => 'kitty', 
      :cuteness => 10, 
      :habitat => 'house', 
      :url => 'http://kingofwallpapers.com/kitten/kitten-026.jpg', 
      :description => 'a baby cat'
    }.to_json
  end

  get '/gerbils' do
    { :name => 'gerbil', 
      :cuteness => 5, 
      :habitat => 'cage', 
      :url => 'http://images.wisegeek.com/gerbil-standing.jpg', 
      :description => 'a decent rodent'
    }.to_json
  end

  get '/parakeets' do
    { :name => 'parakeet', 
      :cuteness => 6, 
      :habitat => 'cage', 
      :url => 'https://lafeber.com/pet-birds/wp-content/uploads/Parakeet-Category-Image-300x300.jpg', 
      :description => 'a colorful bird'
    }.to_json
  end

  get '/axolotls' do
    { :name => 'axolotl', 
      :cuteness => 8, 
      :habitat => 'tank', 
      :url => 'https://s-media-cache-ak0.pinimg.com/564x/74/44/c5/7444c5039642f4a05fab4112fcc35911.jpg', 
      :description => 'a weird salamander i think?'
    }.to_json
  end  

  get '/' do
    # erb :home, locals: {
    {
      :name => 'home',
      :message => 'please view the animals on my site'
    }.to_json
  end
end
