// Require dependecies

var express = require('express'),
    Home   = express.Router(),
    fs      = require('fs'),
    bodyParser = require('body-parser');



Home.route('/home')

  .get(function(req, res, next) {
    var people = fs.readFileSync(__dirname + '/../db/people.json');

    res.render('home', {
      pageTitle:  'People',
      people: JSON.parse(people.toString())
    });
  })


  .post(function(req, res, next){

    var searchReq = req.body.search;

    res.render('detail');

  })


module.exports = Home;
