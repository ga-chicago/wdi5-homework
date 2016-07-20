
// D A T A B A S E
// ===============

var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost/users';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('Mongoose is connected to ' + connectionString + '.');
});

mongoose.connection.on('error', function() {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected.');
});
