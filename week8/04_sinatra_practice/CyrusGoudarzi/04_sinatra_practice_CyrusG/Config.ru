require 'bundler'

Bundler.require :default, ENV['RACK_ENV'].to_sym

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'db.sqlite3'
  )

require './app/models/User'

require './app/controllers/application_controller'
require './app/controllers/api_controller'
require './app/controllers/home_controller'

map('/') { run HomeController }
map('/api') {run ApiController }
