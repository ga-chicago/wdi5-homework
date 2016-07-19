
//  U S E R   M O D E L
//  ===================

//  Mongoose dependant
//  ------------------
var mongoose = require('mongoose');

//  Create schema for user
//  ----------------------
var UserSchema = new mongoose.Schema( {
  username:  String,
  password:  String,
  firstname: String,
  lastname:  String,
  gender:    String,
  age:       Number,
  email:     String
});

//  Declare User as new model, assign schema to the model
//  -----------------------------------------------------
module.exports = mongoose.model('User', UserSchema);
