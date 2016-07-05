// Server
// Require dependencies

var express = require('express'),
    data    = require('./data.json'),
    exphbs    = require('express-handlebars'),
    bodyParser    = require('body-parser'),
    app     = express();


// Configure settings and middleware
app.use(express.static(__dirname + '/public')); // Enable serving static files


app.engine('hbs', exphbs({
  defaultLayout: 'default',
  extname: '.hbs',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/');


app.use(express.static(__dirname + '/public')); // Enable serving static files

app.use(bodyParser.json())// supports json encoded bodies
app.use(bodyParser.urlencoded({extended: true}))// supports encoded bodies

// GET /
app.get('/?', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/home', function(req, res, next) {
  res.render('home', {})
});




console.log('What is boyy  going on?');

// Server startup
var server = app.listen(3000, function() {
  console.log('Gulp app started at http://locahost:' + server.address().port);
});
