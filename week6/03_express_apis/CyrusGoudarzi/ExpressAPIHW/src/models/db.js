var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost/';

mongoose.connect(connectionString);
mongoose.connection.on('connected', function() {
  console.log('mongoose connected to ' + connectionString);
})

mongoose.connection.on('error', function(err) {
  console.log('mongoose connected to ' + err);
})

mongoose.connection.on('disconnected', function() {
  console.log('mongoose disconnected');
})

