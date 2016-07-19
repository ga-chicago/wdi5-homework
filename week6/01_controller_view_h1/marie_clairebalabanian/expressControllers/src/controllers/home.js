// Require dependencies
var express    = require('express'),
    Home       = express.Router(),
    fs         = require('fs'),
    bodyParser = require('body-parser');



Home.route('/?')
  .get(function(req, res, next) {
      res.render('home', {});
    });



Home.route('/login/?')
  .get(function(req, res, next) {
      res.render('login', {});
    })
  .post(function(req, res, next) {
    console.log(req.body);
    res.send('login successful!')
  });


  module.exports = Home;
