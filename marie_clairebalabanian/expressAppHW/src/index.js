// Main server file
// Responsible for configuring, starting, and running the server, which runs on express, express is an api that gives us methods


// Require Dependencies
// express() is a function that makes var app an object. objects has all kinds of methods we can now use.

var express = require('express');
var app   = express();
var exphbs = require('express-handlebars');
var fs     = require('fs');


app.engine('hbs', exphbs({
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts',
  extname:    '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');



// Configure serving static assets 
app.use(express.static(__dirname + '/public'));



// blog posts 
app.route('/posts/:id/?')
  .get(function(req, res, next) {
    var id = parseInt(req.params.id);// must match what's in the app.route(). 
    posts  = fs.readFileSync(__dirname + '/db/posts.json');

    posts  = JSON.parse(posts.toString()); // Turn posts.json file into JS object

    res.render('detail', {
      pageTitle: posts[id].title,
      item:      posts[id] 
    });
  });



// login route
app.route('/login/?')
  .get(function(req, res, next) {
    var posts  = fs.readFileSync(__dirname + '/db/posts.json');

    posts  = JSON.parse(posts.toString());

    res.render('user', {
      pageTitle: 'Login',
      item:      posts[0] 
    });
  });



//help route
app.route('/help/?')
  .get(function(req, res, next) {
    var posts  = fs.readFileSync(__dirname + '/db/posts.json');

    posts = JSON.parse(posts.toString());

    res.render('help', {
      pageTitle: 'Help',
      item:      posts[10]
    });
  });



// Define home page
app.route('/?')
  .get(function(req, res, next) {
    var posts = fs.readFileSync(__dirname + '/db/posts.json');

    res.render('home', {
      pageTitle: 'Homepage',
      posts: JSON.parse(posts.toString()) 
    });
  })
  .post(function(req, res, next) {//handles post requests
  })


// Start server, listen in on a port
var server = app.listen(9000, function() {
  console.log('server listening at http://localhost:' + server.address().port);      
});
