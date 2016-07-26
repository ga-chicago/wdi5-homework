require 'bundler'
# make bundler do all the requiring of gems for us
Bundler.require :default, ENV['RACK_ENV'].to_sym


# Require models
require './app/models/event'


# Require controllers and middleware
require './app/controllers/application_controller'
require './app/controllers/home_controller'
require './app/controllers/api_controller'


map('/') { run ApplicationController }
map('/api') { run ApiController }
map('/') { run HomeController }


