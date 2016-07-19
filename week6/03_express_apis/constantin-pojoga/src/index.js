// Main server file
// ================

// Require the dependencies
var express = require('express'),
    app     = express();

// include mongodb via /models/db.js
require('./models/db');

// Configure serving static assets
app.use(express.static(__dirname + '/public'));

app.use('/api/?', require('./controllers/users'));

var server = app.listen(3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
