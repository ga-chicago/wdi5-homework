#  APPLICATION CONTROLLER
#  Configure Sinatra
#  Controller inheritance settings
#  ===============================

#  Set the application controller
#  ------------------------------
class ApplicationController < Sinatra::Base
  set :views, File.dirname(__FILE__) + '/../views'
  set :public_folder, File.dirname(__FILE__) + '/../public'

  get '/' do
    "H O M E P A G E"

    @instance = 'Example of an instance variable'

    local_var = 'Example of a local variable'

    erb :test, locals: {passed: 'A variable passed from the application controller', local_var: local_var}
  end
end
