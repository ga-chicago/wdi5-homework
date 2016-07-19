var mongoose = require('mongoose');   //using a mongodb database

var connectionString = 'mongodb://localhost/usersss';

mongoose.connect(connectionString);




mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + connectionString);
})

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connected to ' + err);
})

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected ');
})
