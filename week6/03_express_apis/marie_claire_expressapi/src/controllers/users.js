var express   = require ('express'),
    Users       = express.Router(),
    fs        = require('fs'),
    mongoose  = require('mongoose'),
    User      = require('../models/user')



Users.route('/?')
  .get(function(req, res) {
    User.find(function(err, users) {
    console.log(users)
    console.log(err)
    res.json(users)
  })
})
  .post(function(req, res) {
    User.create({username: 'Bob', password: '12343', email: 'bob@bob.com', gender: 'female'}, function(err, user) {
      console.log(user)
      res.json(user)
    })
});




Users.route('/:id/?')
  .get(function(req, res, next) {
    var id = req.params.id
    User.findById(id, function(err, users) {
      console.log(users)
      res.json(users)
    })
  })
  .patch(function(req, res, next) {
    var id = req.params.id
    User.findByIdAndUpdate(id, { username: 'dudeBob' }, function(err, users) {
      console.log(users)
      res.json(users)
    })
  })   
  .delete(function(req, res, next) {
    var id = req.params.id
    User.findByIdAndRemove(id, function(err, users) {
      console.log(users)
      res.json(users)
    })
  });


module.exports = Users;
