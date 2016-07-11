// first require all dependicies

var express     = require('express'),
    Users       = express.Router(),
    fs          = require('fs'),
    mongoose    = require('mongoose'),
    User        = require('../models/user');


Users.route('/:id/?')
  // 
  .get(function(req, res, next) {
    var id = req.params.id;
    User.findById(id, function(err, user)  {
      if (err) {
        console.log(err);
      } else {
        res.json(user)
      }
    }); 
  })
  // DELETE METHOD
  //-----------------
  .delete(function(req, res, next) {
    var id = req.params.id;
    User.findByIdAndRemove(id, function(err, user)  {
      if (err) {
        console.log(err);
      } else {
        res.json(id + ' has been deleted')
      }
    }); 
  })
  // PATCH METHOD 
  .patch(function(req, res, next)  {
    var id = req.params.id;
    User.findByIdAndUpdate(id, {sponsor: 'UnderArmour'}, function(err, user)  {
      if (err) {
        console.log(err);
      } else {
        res.json('A change has been made')
      }
    }); 
  });

// Getting the Users Route
Users.route('/')
  .get(function(req, res, next) {
    User.find(function(err, users) {
      if (err) {
        console.log(err);
      } else {
        res.json(users)
        console.log(users)
      }
    }) 
  })


  // POST METHOD
  .post(function(req, res, next) {
      User.create({fname:   'Joe',
                   lname:   'Frazier',
                   wclass:  'heavyweight',
                   gender:  'Male',
                   sponsor: 'Everlast'}, 
        function(err,user) {
          if (err) {
            console.log(err)
          } else {
            res.json(user);
          }
      })
  });

module.exports = Users
