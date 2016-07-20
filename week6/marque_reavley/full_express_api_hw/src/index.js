
//  L O C A L   S E R V E R   F I L E
//  =================================

//  Dependencies
//  ------------
var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    fs      = require('fs');

//  Setup handlebars view engine
//  ----------------------------
app.engine('hbs', exphbs( {
  defaultLayout: 'main',
  partialsDir:   __dirname + '/views/partials',
  layoutsDir:    __dirname + 'views/layouts',
  extname:       '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

//  Serving static files
//  --------------------
app.use(express.static(__dirname + '/public'));

//  Find and link up the database
//  -----------------------------
require('./data/database')

//  Mount the controllers for use
//  -----------------------------
app.use('/users/?', require('./controllers/users'));

//  Start the server and listen at local port
//  -----------------------------------------
var server = app.listen(8080, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
