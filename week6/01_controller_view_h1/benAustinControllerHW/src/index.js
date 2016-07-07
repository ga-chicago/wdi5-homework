var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    fs      = require('fs');

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    partialsDir:   __dirname + '/views/partials/',
    layoutsDir:    __dirname + '/views/layouts/',
    extname:       '.hbs'
})) 
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/');

app.use(express.static(__dirname + '/public'));

// Define HOMEPAGE
app.route('/?')
  .get(function(req, res, next) {
    res.render('home', {
      pageTitle: 'Homepage',
    });
  })

app.route('/suspects')
  .get(function(req, res, next) {
    var suspects = fs.readFileSync(__dirname + '/db/suspects.json');

    res.render('reportsList', {
      pageTitle: 'Suspects List',
      suspects: JSON.parse(suspects.toString()),
    });
  })


app.get('/contact', function(req, res, next) {
  res.render('contact', {});
})
app.post('/contact', function(req, res, next) {
  // res.send('Thank you, ' + req.body.contactName + '<br/>' + arr + '<br/> <a href="/location-contact">back</a>')
  res.redirect('/');
})


// app.use('/suspects', require('./controllers/suspectsList'));

app.use('/suspects/?', require('./controllers/suspects'));


var server = app.listen(3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});

