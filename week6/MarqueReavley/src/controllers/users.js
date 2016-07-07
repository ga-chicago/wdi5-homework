
//  U S E R S   C O N T R O L L E R
//  ===============================

//  Dependencies
//  ------------
var express = require('express'),
    Users   = express.Router(),
    fs      = require('fs');

//  Define the Users Page
//  -------------------
Users.route('/details/?')

  .post(function(req, res, next) {

    var details = fs.readFileSync(__dirname + '/../db/datasource.json');
        details = JSON.parse(details.toString());    

    res.render('detail', {
      pageTitle: 'Full Details',
      details:   details
    })

  })









Users.route('/?')
  .get(function(req, res, next) {

        var users = fs.readFileSync(__dirname + '/../db/datasource.json');    
    
    res.render('users', {
      pageTitle: 'Users',
      users: JSON.parse(users.toString())
    })


  })

  // .post(function(req, res, next) {

  // });









module.exports = Users;
