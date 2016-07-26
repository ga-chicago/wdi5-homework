require 'bundler'
Bundler.require :default, ENV['RACK_ENV'].to_sym

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'db.sqlite3'
  )

# Require models
require './app/models/taco'

# Require controllers and middleware
require './app/controllers/application_controller'
require './app/controllers/home_controller'
require './app/controllers/api_controller'

map('/api') { run ApiController }
map('/') { run HomeController }

