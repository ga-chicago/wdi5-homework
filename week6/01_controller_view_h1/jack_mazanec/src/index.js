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


// Define home
app.use('/?', require('./controllers/homes'));

// Define home
app.use('/detail', require('./controllers/detail'));


// Define detail page
// app.route('/people/:index')
//   .get(function(req, res, next) {
//     var people = fs.readFileSync(__dirname + '/db/people.json'),
//         index  =
//     res.render('home', {
//       pageTitle:  'People',
//       people: JSON.parse(people.toString())
//     });
//   })

var server = app.listen(3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});

