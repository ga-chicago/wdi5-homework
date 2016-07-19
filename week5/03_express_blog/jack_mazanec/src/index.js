// Main Server File
// ================
// Responsible for configuring, 
// starting, and running the server.

// Require the dependencies
var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    fs      = require('fs');

// Configuring the applicartion
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

// Define home page
app.route('/blogs')
  .get(function(req, res, next) {
    var blogs = fs.readFileSync(__dirname + '/db/blogs.json');

    res.render('home', {
      pageTitle:  'Homepage',
      blogs:      JSON.parse(blogs.toString())
    });
  })
  .post(function(req, res, next) {
    // response here
  })

app.route('./blogs/:id')
  .get(function(req, res, next) {
    var id    = parseInt(req.params.id),
        blogs = fs.readFileSync(__dirname + '/db/blogs.json');
    // turns todos into string parsed into a pojo
    blogs = JSON.parse(blogs.toString()); // Turn todos file into JS object



    res.render('detail', {
      pageTitle:  blogs[id].title,
      author:     blogs[id].author,
      blog:      blogs[id].body

    });
  });

// Start server, listen in on a port
var server = app.listen(3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
