
//  L O C A L   S E R V E R   F I L E
//  =================================

//  Require dependencies
//  --------------------
var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    fs      = require('fs');

//  Setup view engine with handlebars
//  ---------------------------------
app.engine('hbs', exphbs( {
  defaultLayout: 'main',
  partialsDir:   __dirname + '/views/partials',
  layoutsDir:    __dirname + '/views/layouts',
  extname:       '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

//  Static files serving option
//  ---------------------------
app.use(express.static(__dirname + '/public'));

//  Define individual blog posts from JSON file
//  -------------------------------------------
app.route('/posts/:id/?')
  .get(function(req, res, next) {
    var id        = parseInt(req.params.id),
        posts = fs.readFileSync(__dirname + '/db/posts.json');

    posts = JSON.parse(posts.toString());

    res.render('postview', {
      pageTitle: posts[id].name,
<<<<<<< HEAD
      post:      posts[id]
=======
      post:      posts[id],
      excerpt:   posts[id].substring(0,150) + "..."
>>>>>>> 4d4e94cfa488461b3d06f44dba57cb024af0eec3
    })
  });

//  Define the Posts page
//  ---------------------
app.route('/postlist')
  .get(function(req, res, next) {
    var posts    = fs.readFileSync(__dirname + '/db/posts.json');
    
    res.render('postlist', {
      pageTitle: 'posts',
<<<<<<< HEAD
      posts: JSON.parse(posts.toString())
=======
      posts: JSON.parse(posts.toString()) 
>>>>>>> 4d4e94cfa488461b3d06f44dba57cb024af0eec3
    })

  })

//  Define the About page
//  ---------------------
app.route('/about')
  .get(function(req, res, next) {

    res.render('about', {
      pageTitle: 'About'
    })

  });

//  Define the homepage which includes all blog posts
//  -------------------------------------------------
app.route('/?')
  .get(function(req, res, next) {
    var posts    = fs.readFileSync(__dirname + '/db/posts.json'),
<<<<<<< HEAD
        postArr  = JSON.parse(posts.toString()),
        featured = postArr[Math.floor(Math.random() * (postArr.length + 1))];
        console.log("-------------------------------------------------------")
        console.log(featured)
        console.log("-------------------------------------------------------")
        console.log(featured.title);
        console.log(featured.body.substring(0,20));
        console.log("-------------------------------------------------------")
    

    res.render('home', {
      pageTitle: 'Homepage',
      posts:     JSON.parse(posts.toString()),
=======
        postArr  = JSON.parse(posts.toString())
            
    res.render('home', {
      pageTitle: 'Homepage',
      posts:     JSON.parse(posts.toString()),
      postArr:   postArr,
      featured:  postArr[Math.floor(Math.random() * (postArr.length + 1))],
>>>>>>> 4d4e94cfa488461b3d06f44dba57cb024af0eec3
    })
  });

//  Start the server and listen at a port
//  -------------------------------------
var server = app.listen(3000, function () {
  console.log('Server listening at http://localhost:' + server.address().port);
  console.log('Transferring data...');
});
