var express     = require('express'),
    app         = express(),
    gulp        = require('gulp'),
    gls         = require('gulp-live-server'),
    fs          = require('fs'),
    bodyParser  = require('body-parser'); 



// requires the mongoose database
require('./models/db');


// RESTFUL 
app.use('/users/?', require('./controllers/users'));


// Starts the server
var server = app.listen(3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
