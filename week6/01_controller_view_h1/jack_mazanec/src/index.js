// Main Server File
// ================
// Responsible for configuring, 
// starting, and running the server.

// Require the dependencies
var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    fs      = require('fs');
    bodyParser = require('body-parser');

// Configuring the applicartion
app.engine('hbs', exphbs({
  defaultLayout:  'main',
  partialsDir:    __dirname + '/views/partials',
  layoutsDir:     __dirname + '/views/layouts',
  extname:        '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.use(bodyParser.json())// supports json encoded bodies
app.use(bodyParser.urlencoded({extended: true}))// supports encoded bodies

// Define home
app.use('/?', require('./controllers/homes'));

// Define home
app.use('/detail', require('./controllers/detail'));


var server = app.listen(3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});

