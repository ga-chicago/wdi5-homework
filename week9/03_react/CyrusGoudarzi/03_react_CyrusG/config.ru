require 'bundler'

Bundler.require :default, ENV['RACK_ENV'].to_sym

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'db.sqlite3'
  )

require './app/models/user'
require './app/models/whale'

require './app/controllers/application_controller'
require './app/controllers/users_controller'
require './app/controllers/whales_controller'
require './app/controllers/ocean_controller'

map('/users') { run UsersController }
map('/whales') { run WhalesController }
map('/') { run OceanController }
