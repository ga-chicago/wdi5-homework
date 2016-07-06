
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

// Defineblogs route
app.route('/blog/:id/?')
  .get(function(req, res, next) {
    var id    = parseInt(req.params.id),
        blogs = fs.readFileSync(__dirname + '/db/blog.json');

    blog = JSON.parse(blogs.toString()); // Turn blog file into JS object

    res.render('detail', {
      pageTitle: blog[id].name,
      blog:      blog[id]
    });
  });

// Define home page
app.route('/?')
  .get(function(req, res, next) {
    var blogs = JSON.parse(fs.readFileSync(__dirname + '/db/blog.json').toString());
    blogs.forEach(function(val, i) {
      val.date = val.publishedOn.slice(4,25);
      var str = val.body.slice(0,200);
      while (str.length > 100) {
        if (str[str.length-1] != " ") {
          str = str.slice(0, str.length - 1);
          console.log(str);
        } else  break
      }
    val.excerp = str + " ...";
    });

    res.render('home', {
      pageTitle:  'Homepage',
      blog:       blogs
    });
  })
  .post(function(req, res, next) {
    // response here
  })

// Start server, listen in on a port
var server = app.listen(3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
