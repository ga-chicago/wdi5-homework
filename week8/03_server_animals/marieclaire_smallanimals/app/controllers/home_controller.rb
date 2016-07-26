class HomeController < ApplicationController
  

  get '/kitten/?' do
    { :name => 'kitten',
      :cuteness => '11 out of 10 stars',
      :habitat => 'in my apartment...kind of',
      :picture_url => 'https://3b0ad08da0832cf37cf5-435f6e4c96078b01f281ebf62986b022.ssl.cf3.rackcdn.com/articles/content/Bringing-Your-Kitten-Home_f968d7e4-043a-4260-b717-d88bd8ab3b6c.jpg',
      :description => 'bby cats. playful and nuts. puny meow'
    }.to_json
  end


  get '/puppy/?' do
    { :name => 'puppy',
      :cuteness => 'so friggin cute',
      :habitat => 'in my apartment...someday :(',
      :picture_url => 'https://s-media-cache-ak0.pinimg.com/736x/d5/72/7e/d5727e8254d2d5423ea56bdbf2750801.jpg',
      :description => 'baby dogs. clumsy and playful. pathetic bark.'
    }.to_json
  end


  get '/bunny/?' do
    { :name => 'bunny',
      :cuteness => 'absolutely adorable',
      :habitat => 'prairies, meadows and the streets of chicago.',
      :picture_url => 'http://images.hellogiggles.com/uploads/2014/10/22/I-Felled-Over-Bunny-Meme-copy.jpg',
      :description => 'big ears. cute tail. hop around.'
    }.to_json
  end


  get '/slowloris/?' do
    { :name => 'slow loris',
      :cuteness => 'cutest of them all! without a fuckin doubt!',
      :habitat => 'tropical rainforests',
      :picture_url => 'https://i.ytimg.com/vi/RWz_MzUhgYo/hqdefault.jpg',
      :description => 'giant saucer eyes. slow movements. fond of armpit tickles.'
    }.to_json
  end

  get '/mouse/?' do
    { :name => 'mouse',
      :cuteness => 'pretty cute',
      :habitat => 'very dirty restaurants...',
      :picture_url => 'http://compass.microsoft.com/assets/ff/be/ffbe20a0-c36d-42dd-b710-b1ee6ee0981f.jpg?n=Compact%20Optical%20Mouse%20500.jpg',
      :description => 'they are so weeeee and cute'
    }.to_json
  end


  get '/?' do
    { :name => 'marie-claire', :message => 'i like small animals' }.to_json
  end
end









