
//  L O C A L   S E R V E R   F I L E
//  =================================


//  Require dependencies
//  --------------------
var express    = require('express'),    // These are all required to run the page
    app        = express(),
    exphbs     = require('express-handlebars'),
    fs         = require('fs'),
    bodyParser = require('body-parser');


//  Setup view engine with handlebars (configures the application)
//  --------------------------------------------------------------
app.engine('hbs', exphbs( {
  defaultLayout: 'main',
  partialsDir:   __dirname + '/views/partials',
  layoutsDir:    __dirname + '/views/layouts',
  extname:       '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


//  
//  ---------------------------
app.use(express.static(__dirname + '/public'));    // This says to use any static files in the public folder
app.use(bodyParser.urlencoded({extended: true}));
app.use('/?', require('./controllers/home'));
app.use('/users/?', require('./controllers/users'));
app.use('/fulllisting/?', require('./controllers/fulllisting'));


//  Start the server and listen at a port
//  -------------------------------------
var server = app.listen(3000, function () {
  console.log('Server listening at http://localhost:' + server.address().port);
  console.log('-----------------------------------------');
});
