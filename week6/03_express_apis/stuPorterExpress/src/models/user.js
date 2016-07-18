
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  fname:    String,
  lname:    String,
  wclass:   String,
  gender:   String,
  sponsor:  String
})


module.exports = mongoose.model('User', UserSchema);
