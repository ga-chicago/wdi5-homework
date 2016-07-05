var express = require('express'),
    app     = express ();
    exphbs  = require('express-handlebars')
    fs      = require('fs')

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

// Define the todos route

app.route('/blogpost/:id/?')
  .get(function(req, res, next) {
    var id    = parseInt(req.params.id)
      blogpost = fs.readFileSync(__dirname + '/blog/blogpost.json')

    blogpost = JSON.parse(blogpost.toString());    // turn todos file into js object

    res.render('detail', {
      pageTitle: blogpost[id].title,
      blogposts:      blogpost[id],
    })
  })

// Define home page
app.route('/?')
  .get(function(req, res, next) {
    var blogpost = fs.readFileSync(__dirname + '/blog/blogpost.json')

    res.render('home', {
      pageTitle: 'Homepage',
      blogpost:    JSON.parse(blogpost.toString())
    });
  })
  

app.get('/home', function(req, res, next) {
  res.render('home', {})
})

//start server, listen in on a port

var server = app.listen(3000, function() {
  console.log('Server listening at http://localhost' + server.address().port);
});

