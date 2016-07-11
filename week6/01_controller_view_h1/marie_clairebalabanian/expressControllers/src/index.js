// Main Server File
// ================
// Responsible for configuring, 
// starting, and running the server.

// Require the dependencies
var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    fs      = require('fs'),
    bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));



//Configure the app
app.engine('hbs', exphbs({//first parameter is view engine
  defaultLayout:  'main',
  partialsDir:    __dirname + '/views/partials',   //__dirname point to the directory where index.js is. in this case 'src'
  layoutsDir:     __dirname + '/views/layouts',
  extname:        '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Configure serving static assets
app.use(express.static(__dirname + '/public'));




// Configure routes
app.use('/?', require('./controllers/home'));
app.use('/?', require('./controllers/about'));
app.use('/?', require('./controllers/user'));


// Start server, listen in on a port
var server = app.listen(3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
