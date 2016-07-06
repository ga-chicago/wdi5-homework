// Require dependecies

var express = require('express'),
    Home   = express.Router(),
    fs      = require('fs');

Home.route('/?')

  .get(function(req, res, next) {
    var people = fs.readFileSync(__dirname + '/../db/people.json');

    res.render('home', {
      pageTitle:  'People',
      people: JSON.parse(people.toString())
    });
  })


module.exports = Home;
