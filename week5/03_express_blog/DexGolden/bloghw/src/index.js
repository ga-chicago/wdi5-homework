//MAIN SERVER FILE
var express   = require('express'),
    app       = express(),
    exphbs    = require('express-handlebars'),
    fs        = require('fs');

///SET VIEW ENGINE
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials/',
  layoutsDir: __dirname + '/views/layouts',
  extname: '.hbs'
}))

app.set('view engine', 'hbs'); // Turn it on
app.set('views', __dirname + '/views'); //SET VIEWS dirrctory, which is not an hbs config. 

app.use(express.static(__dirname + '/public')); //Tell express where to find static pages

var server = app.listen(3000, function() {
  console.log( "Server listening at: " + server.address().port);
});


//Define todos route
app.route('/posts/:id/?')
  .get(function(req, res, next) {
    var id = parseInt(req.params.id);
      posts = fs.readFileSync(__dirname + '/db/posts.json');
      console.log(id);

    posts = JSON.parse(posts.toString());
    res.render('detail', {
      pageTitle: posts[id].title,
      post: posts[id]
    });
  })

//Def ABout
app.route('/about/?')
  .get(function(req, res, next) {
    res.render('about', {
      pageTitle: 'About'
    });
  })

//Def ABout
app.route('/contact/?')
  .get(function(req, res, next) {
    res.render('contact', {
      pageTitle: 'Contact Me'
    });
  })


//Define homepage
app.route('/?')
  .get(function(req, res, next) {
    var posts = fs.readFileSync(__dirname + '/db/posts.json')

    res.render('home', {
      pageTitle: 'Homepage', 
      posts: JSON.parse(posts.toString())

    });
  })



