var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    fs      = require('fs');

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
