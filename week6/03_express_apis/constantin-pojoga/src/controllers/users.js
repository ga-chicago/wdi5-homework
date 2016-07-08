var express = require('express'),
    Users = express.Router(),
    mongoose = require('mongoose'),
    User     = require(__dirname + '/../models/user');

/* GET /api/:id */
Users.route('/:id/?')
  .get(function(req, res, next) {
    console.log(req.body);
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* PUT /api/:id */
Users.put('/:id', function(req, res, next) {
  console.log(req.body);
  User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});
 
/* PATCH /api/:id */
Users.patch('/:id', function(req, res, next) {
  console.log(req.body);
  User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* DELETE /api/:id */
Users.delete('/:id', function(req, res, next) {
  console.log(req.body);
  User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* FIND /api/? */
Users.route('/?')
  .get(function(req, res, next) {
    console.log(req.body);
    User.find(function(err, users) {
      console.log(users);
      console.log(err);
      res.json(users);
    })
  })
  /* POST /api/? */
  .post(function(req, res, next) {
    console.log(req.body);
    User.create(req.body, function(err, users) {
      console.log(users);
      res.json(users);
    })
  })

module.exports = Users;



