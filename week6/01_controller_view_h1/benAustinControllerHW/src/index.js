var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    fs      = require('fs'),
    bodyP   = require('body-parser');

app.use(bodyP.json()); //supports json encoded bodies
app.use(bodyP.urlencoded({extended:true})); //supports encoded bodies


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





// app.post('/contact/?', function(req, res, next) {

//   console.log(req.body);
//   // res.send('Thank you, ' + req.body.contactName + '<br/>' + arr + '<br/> <a href="/location-contact">back</a>')
//   res.send('request received');
// })

// app.get('/contact/?', function(req, res, next) {
//   res.render('contact', {});
// })








// app.use('/suspects', require('./controllers/suspectsList'));
app.use('/contact', require('./controllers/contact'));

app.use('/suspects/?', require('./controllers/suspects')); 
//every URL in this linked controller will start with /suspects/ 


var server = app.listen(3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});

