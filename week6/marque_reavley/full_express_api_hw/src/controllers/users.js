
//  U S E R   C O N T R O L L E R
//  =============================

//  Dependencies
//  ------------
var express  = require('express'),
    Users    = express.Router(),
    mongoose = require('mongoose'),
    UserMod  = require('../models/user'),
    fs       = require('fs');

Users.route('/:id')
  // GET a single resource by id
  .get(function(req, res, next) {
    res.json({message: 'Here is record ' + req.params.id + '.'});
  })
  // PATCH a single resource by id
  .patch(function(req, res, next) {
    res.json({message: 'You updated record ' + req.params.id + '.'});
  })
  // DELETE a single resource by id
  .delete(function(req, res, next) {
    res.json({message: 'You deleted record ' + req.params.id + '.'});
  })

Users.route('/?')
  // GET - access database of users
  .get(function(req, res, next) {
    UserMod.find(function(err, users) {
      console.log(users);
      console.log(err);
      res.json(users);
    })
  })
  // POST - add a user to the database
  .post(function(req, res, next) {
    UserMod.create({username: 'username', password: 'password', firstname: 'firstname', lastname: 'lastname', gender: 'gender', age: 0, email: 'email@email.com'}, function(err, user) {
      console.log(user);
      res.json(user);
    })
  })

module.exports = Users
