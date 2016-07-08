var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  name:       String,
  occupation: String,
  email:      String,
  age:        String

})

module.exports = mongoose.model('User', UserSchema)
