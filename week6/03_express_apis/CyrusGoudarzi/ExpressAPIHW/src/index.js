var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    fs      = require('fs');

<<<<<<< HEAD
=======
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  partialsDir:   __dirname + '/views/partials',
  layoutsDir:    __dirname + '/views/layouts',
  extname:           '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


>>>>>>> 12bb0b19b54eccbdd8a83710ff9380dd92261ec8
app.use(express.static(__dirname + '/public'));


app.use(/members_only/, function(req, res, next) {
  if (req.session.isLoggedIn) {
    return next()
  } else {
    res.direct('/login');
  }
})

require('./models/db')

app.use('/users/', require('./controllers/users'))

var server = app.listen(3000, function() {
  console.log('Server listening at ' + server.address().port)
})
