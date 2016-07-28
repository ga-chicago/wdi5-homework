#  SERVER FILE
#  ===========

#  Require dependencies
#  --------------------
require 'bundler'     # This allows bundler to install the other gems
Bundler.require :default, ENV['RACK_ENV'].to_sym    # ??? Can't remember

#  Require controllers and middleware
#  ----------------------------------
require './app/controllers/application_controller'
require './app/controllers/home_controller'

map('/test') { run ApplicationController }
map('/')     { run HomeController }
