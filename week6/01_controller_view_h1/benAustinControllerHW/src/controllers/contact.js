// require dependencies
var express  = require('express'),
    Contact  = express.Router(),
    fs       = require('fs'),
    bodyP    = require('body-parser');

Contact.route('/?')
            // NEEDED IN   app.use(bodyP.json()); //supports json encoded bodies
            // INDEX.JS    app.use(bodyP.urlencoded({extended:true})); //supports encoded bodies
  .post(function(req, res, next) {
    console.log(req.body);
    res.send('request received');
  })
  .get(function(req, res, next) {
    res.render('contact', {});
  })


module.exports = Contact; 
