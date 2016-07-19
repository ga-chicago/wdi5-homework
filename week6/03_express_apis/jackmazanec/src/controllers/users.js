// first require all dependicies

var express     = require('express'),
    // confused on this part as well
    Users       = express.Router(),
    fs          = require('fs'),
    mongoose    = require('mongoose'),
    User        = require('../models/user');

Users.route('/input')
  // get method--displays user's specific object
  .get(function(req, res, next) {
    // so for this portion, User, which is the inbetween between the data base and 
    // javascript, finds what....

        res.render('form')
    })
  .post(function(req, res, next) {
    User.create(req.body, 
        function(err,user) {
          if (err) {
            console.log(err)
          } else {res.json(user);
        }      
    })
  });
// now to set some of the routes
// route to specific user using mongoose id
Users.route('/:id')
  // get method--displays user's specific object
  .get(function(req, res, next) {
    var id = req.params.id;
    // so for this portion, User, which is the inbetween between the data base and 
    // javascript, finds what....
    User.findById(id, function(err, user)  {
      if (err) {
        console.log(err);
      } else {
        res.json(user)
      }
    }); 
  })
  // delete method-- deletes specified user
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
  // patch method-- updates user 
  .patch(function(req, res, next)  {
    var id = req.params.id;
    User.findByIdAndUpdate(id, {name: 'Billllllly'}, function(err, user)  {
      if (err) {
        console.log(err);
      } else {
        res.json('Changes have been made')
      }
    }); 
  });

// basic users route
Users.route('/')
  // get method--displays list of all users
  .get(function(req, res, next) {
    // so for this portion, User, which is the inbetween between the data base and 
    // javascript, finds what....
    User.find(function(err, users) {
      if (err) {
        console.log(err);
      } else {
        res.json(users)
        console.log(users)
      }
    }) 
  });
  // // post method--adds new user
  // .post(function(req, res, next) {
  //     User.create({name: 'Beans',
  //                  race: 'Black',
  //                  age:   4,
  //                  eyecolor: 'brown',
  //                  gender: 'female'}, 
  //       function(err,user) {
  //         if (err) {
  //           console.log(err)
  //         } else {
  //           res.json(user);
  //         }
  //     })
  // });

module.exports = Users
