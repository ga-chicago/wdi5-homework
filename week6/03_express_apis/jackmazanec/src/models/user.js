// set up the schema for the mongoose database
// what does this folder do?
// require mongoose
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name:     String,
  age:      Number,
  race:     String,
  gender:   String,
  eyecolor: String
})

// we are declaring user as the new model name
// and assigning the schema to this model in the second argument
// REALLY CONFUSED ABOUT SECOND HALF OF THIS
module.exports = mongoose.model('User', UserSchema);
