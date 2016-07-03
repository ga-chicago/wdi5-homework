// Require [regular] DEPENDENCIES
var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    fs      = require('fs'),
    bodPars = require('body-parser');


// Handlebars
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  partialsDir:    __dirname + '/views/partials/',
  layoutsDir:     __dirname + '/views/layouts/',
  extname:        '.hbs'
}))
app.set('view engine', 'hbs'); //what's this line do
app.set('views', __dirname + '/views');

// STATIC assets
app.use(express.static(__dirname + '/public'));

// encodes our request objects into something we can read 
// app.use(bodPars.json()); //supports json encoded bodies
// app.use(bodPars.urlencoded({extended:true})); //supports encoded bodies

// exphbs.registerHelper('makeExcerpt', function(){
//   var words = [];
//     var tempString = "";
//     var blurb ="";

//     for (var i = 0; i < this.length; i++) {
//       if (this[i]!==" "  || words.length >= 15){
//         tempString += this[i];
//       }
//       else {
//         words.push(tempString + " ");
//         tempString = "";
//       }
//     }
    
//     for (var m = 0; m < words.length; m++){
//       blurb += words[m];
//     }
//   blurb += "...";
//   return blurb;
// }) 


// route for BLOG POSTS... Confusing!
app.route('/blogs/:id/?')   //whats it looking for here
  .get(function(req, res, next) {    
    var id    = parseInt(req.params.id),   // not sure I understand params
        blogs = fs.readFileSync(__dirname + '/db/blogs.json');

    blogs = JSON.parse(blogs.toString()); 


    res.render('readMore', {
      pageTitle: blogs[id].title,
      title: blogs[id].title,
      author: blogs[id].author,
      publishedOn: blogs[id].publishedOn,
      body: blogs[id].body,
      blurb: makeExcerpt(blogs[id].body)

    });

  });

// Homepage
app.route('/?')
  .get(function(req, res, next) {
        var id    = parseInt(req.params.id),   // not sure I understand params
            blogs = fs.readFileSync(__dirname + '/db/blogs.json');

    // blogs = JSON.parse(blogs.toString());


    res.render('home', {
      pageTitle: 'Home',
      author: 'Cool Blog',
      blogs: JSON.parse(blogs.toString()),  //why is this here, and not a few lines up
      // blurb: makeExcerpt(blogs[id].body)

    });
  }) 

// app.get('/', function(req, res, next) {
//   res.render('home', {});
// })

app.get('/about', function(req, res, next) {
  res.render('about', {});
})

app.get('/contact', function(req, res, next) {
  res.render('contact', {});
})


var server = app.listen(3000, function() {
  console.log("Running at http://localhost:" + server.address().port)
});
