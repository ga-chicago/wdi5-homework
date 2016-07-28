require 'bundler'

Bundler.require :default, ENV['RACK_ENV'].to_sym

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'db.sqlite3'
  )

require './app/models/whale'

require './app/controllers/application_controller'
require './app/controllers/whales_controller'
require './app/controllers/home_controller'

map('/whales') { run WhalesController }
map('/') { run HomeController }
