//Require dependencies
var express         = require('express'),
    UsersController = express.Router();

UsersController.route('/:id/?')
  .get(function(req, res, next) {
    var id = req.params.id;

    res.send('User ID is ' + id);
<<<<<<< HEAD
=======
    
>>>>>>> 12bb0b19b54eccbdd8a83710ff9380dd92261ec8
  })
  .post(function(req, res, next) {
    res.json({
      status: 'ok',
      user_id: req.params.id
    });
  });

  UsersController.route('/?')
  .get(function(req, res, next) {
    res.send('Listing all users');
  })
  .post(function(req, res, next) {
    res.json({
      status: 'ok',
      message: 'New user created'
    });
  });

<<<<<<< HEAD
=======

>>>>>>> 12bb0b19b54eccbdd8a83710ff9380dd92261ec8
  module.exports = UsersController;
