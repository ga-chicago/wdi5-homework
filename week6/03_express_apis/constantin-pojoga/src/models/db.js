var mongoose  = require('mongoose'),
    connectionString = 'mongodb://localhost/usersAPI';

    mongoose.connect(connectionString);

    mongoose.connection.on('connected', function() {
      console.log("Mongoose is connected to " + connectionString);
    });

    mongoose.connection.on('error', function(err) {
      console.log("Mongoose connection error: " + err);
    });

    mongoose.connection.on('disconnected', function() {
      console.log("Mongoose disconnected!");
    });

