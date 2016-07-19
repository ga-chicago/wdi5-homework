var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
  name:     String,
  lastname: String,
  age:      Number,
  position: String,
  location: String
}, {strict: false});


// We a declaring User as the new model name and assigning the schema to this model
// in the second argument
module.exports = mongoose.model('Users', UsersSchema);
