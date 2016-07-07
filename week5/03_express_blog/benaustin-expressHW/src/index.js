// Require [regular] DEPENDENCIES
var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    fs      = require('fs'),
    bodPars = require('body-parser');
    handlebars = require('handlebars');


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

// Handlebars.registerHelper('makeExcerpt', function(){
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

// function makeExcerpt(content){

//   var words = [];
//     var tempString = "";
//     var blurb ="";

//     for (var i = 0; i < content.length; i++) {
//       if (content[i]!==" "  || words.length >= 15){
//         tempString += content[i];
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
// }

function lineBreak(content){
  var tempString = "";
  var arr = content.split('\r\n');
  for (var i = 0; i < arr.length; i++) {
    tempString += arr[i] + '<br/><br/>';
  }
  return tempString;
}

var truncDate = function(content) {
  var shortDate = "";
  shortDate = content.slice(4,15);
  return shortDate;
}



// route for BLOG POSTS... Confusing!
app.route('/blogs/:id/?')   //whats it looking for here
  .get(function(req, res, next) {    
    var id    = parseInt(req.params.id),   // not sure I understand params
        blogs = fs.readFileSync(__dirname + '/db/blogs.json');

<<<<<<< HEAD
    blogs = JSON.parse(blogs.toString()); 
=======
        blogs = JSON.parse(blogs.toString()); 
>>>>>>> 4d4e94cfa488461b3d06f44dba57cb024af0eec3


    res.render('readMore', {
      pageTitle: blogs[id].title,
      title: blogs[id].title,
      author: blogs[id].author,
      publishedOn: truncDate(blogs[id].publishedOn),
<<<<<<< HEAD
      body: lineBreak(blogs[id].body)
=======
      body: lineBreak(blogs[id].body),
      blogs: blogs

>>>>>>> 4d4e94cfa488461b3d06f44dba57cb024af0eec3

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
      body: blogs.body

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
