var express    = require('express'),
    User    = express.Router(),
    fs         = require('fs'),
    bodyParser = require('body-parser');



User.route('/?')


User.route('/survey/?')
  .get(function(req, res, next) {
    res.render('survey', {});
  })
  .post(function(req, res, next) {
    console.log(req.body);
    res.send('your survey has been submitted!');
  });




  module.exports = User;
