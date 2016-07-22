var mongoose = require('mongoose');

var APISchema = new mongoose.Schema({
  name: String
})

module.exports = mongoose.model('API', APISchema);
