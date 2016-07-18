var express  = require('express'),
    Users    = express.Router(),
    fs       = require('fs');
    mongoose = require('mongoose'),
    User     = require('../models/user');


Users.route('/:id/')
  //GET method
  .get(function(req, res) {
  //define the id
  var id = req.params.id;
  //use find method of mongoose
    User.find(function(err, Users) {
      res.json(Users)
    })
  })
  //PUT method
  .put(function(req, res) {
  //define the id
  var id  = req.params.id;
    User.findByIdAndUpdate(id, { name: "The Rolling Stones" }, function(err, User) {
      if (err) {
        console.log(err)
      } else {
      console.log(User)
      res.json("Cheers")
        } 
      })
    })
  //PATCH method
   .patch(function(req, res) {
  //define the id
  var id  = req.params.id;
    User.findByIdAndUpdate(id, { name: "The Beatles" }, function(err, User) {
      if (err) {
        console.log(err)
      } else {
      console.log(User)
      res.json("Cheers")
        } 
      })
    })
   .delete(function(req, res) {
  //define the id
  var id  = req.params.id;
    User.findByIdAndRemove(id, { name: "" }, function(err, User) {
      if (err) {
        console.log(err)
      } else {
      console.log(User)
      res.json("Cheers")
        } 
      })
    })
   .put(function(req, res) {
  //define the id
  var id  = req.params.id;
    User.findByIdAndUpdate(id, { name: "Neil Young" }, function(err, User) {
      if (err) {
        console.log(err)
      } else {
      console.log(User)
      res.json("Cheers")
        } 
      })
    })

  Users.route('/')
  //GET method
  .get(function(req, res) {
    User.find(function(err, Users) {
      res.json(Users)
    })
  })
  //POST method
  .post(function(req, res) {
    User.create({
      name:       'Cyrus G',
      occupation: 'professional badass',
      email:      'cg@trill.com',
      age:        '24'},
      function(err, user) {
        res.json(user)
      })
    })

  

module.exports = Users;
