// Main Server File
// ================
// Responsible for configuring, 
// starting, and running the server.

// Require the dependencies
var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    fs      = require('fs');

app.engine('hbs', exphbs({
  defaultLayout:  'main',
  partialsDir:    __dirname + '/views/partials',
  layoutsDir:     __dirname + '/views/layouts',
  extname:        '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Configure serving static assets
app.use(express.static(__dirname + '/public'));
var bloghw = fs.readFileSync(__dirname + '/db/bloghw.json');

// Define the bloghw route
app.route('/bloghw/:id/?')
  .get(function(req, res, next) {
    var id    = parseInt(req.params.id),
    bloghw = fs.readFileSync(__dirname + '/db/bloghw.json');

    bloghw = JSON.parse(bloghw.toString()); // Turn bloghw file into JS object

    res.render('detail', {
      pageTitle: bloghw[id].title,
      pageBody:  bloghw[id].body,
      pageAuthor: bloghw[id].author,
      pagePublisher: bloghw[id].publishedOn,

    });
  });

// Define home page
app.route('/')
  .get(function(req, res, next) {

    res.render('partials/home', {
      pageTitle:  'index',
      bloghw: JSON.parse(bloghw.toString()),


    });

  })
  .post(function(req, res, next) {
    
  })

// Start server, listen in on a port
var server = app.listen(3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
