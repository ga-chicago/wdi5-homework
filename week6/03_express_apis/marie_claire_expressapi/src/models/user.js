// Require Mongoose
var mongoose = require('mongoose');

//Make Schema
var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  gender: String
});


// Export
module.exports = mongoose.model('User', UserSchema);
