#  HOME CONTROLLER
#  ===============

#  Set the home controller
#  -----------------------
class HomeController < Sinatra::Base
  set :views, File.dirname(__FILE__) + '/../views'
  set :public_folder, File.dirname(__FILE__) + '/../public'

  get '/' do
    {:name => 'Small Animals',
     :message => 'We all know little tiny creatures are SO cute!'
    }.to_json
  end

  get '/kitten' do
    {:name        => 'Kitten',
     :cuteness    => 'Uber',
     :habitat     => 'My heart',
     :picture_url => 'http://i.dailymail.co.uk/i/pix/2013/02/21/article-2281982-18258EA7000005DC-231_964x649.jpg',
     :description => 'The kitten is the cutest tiny creature in kitten land!'
    }.to_json
  end

  get '/puppy' do
    {:name        => 'Puppy',
     :cuteness    => 'Super',
     :habitat     => 'My soul',
     :picture_url => 'https://new2.fjcdn.com/comments/Awh+look+at+it+s+cute+puppy+mouth+with+those+those+_0289cd42cc66707d422a96b1b0e84713.jpg',
     :description => 'The puppy is the cutest tiny creature in puppy land!'
    }.to_json
  end

  get '/wombie' do
    {:name        => 'Wombie',
     :cuteness    => 'OMG',
     :habitat     => 'My personal cute heaven',
     :picture_url => 'http://ih0.redbubble.net/image.9512015.0450/flat,1000x1000,075,f.jpg',
     :description => 'The wombie is the cutest tiny creature in wombat land!'
    }.to_json
  end

  get '/hedgie' do
    {:name        => 'Hedgie',
     :cuteness    => 'Kill me',
     :habitat     => 'My spiritual backyard',
     :picture_url => 'http://i.imgur.com/RTkvwJe.jpg',
     :description => 'The hedgie is the cutest tiny creature in hedgehog land!'
    }.to_json
  end

  get '/piglet' do
    {:name        => 'Piglet',
     :cuteness    => 'Uber',
     :habitat     => 'My emotional cute haven',
     :picture_url => 'http://www.thatcutesite.com/uploads/2010/12/tiny_pig_nose-600x438.jpg',
     :description => 'The piglet is the cutest tiny creature in piggy land!'
    }.to_json
  end
end
