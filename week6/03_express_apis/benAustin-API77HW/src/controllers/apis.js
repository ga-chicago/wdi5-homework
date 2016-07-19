var express  = require('express'),
    APIs     = express.Router(),
    fs       = require('fs'),
    mongoose = require('mongoose'),
    API      = require('../models/api');

//specific API resource
APIs.route('/:id/?')
  .get(function(req, res, next) { // get single api by id
    var id = req.params.id;
    API.findById(id, function(err, apis) {
    res.json({message: 'you requested the api resource with id#' + req.params.id});
    console.log(apis);
    })
  })
  .patch(function(req, res, next) { //update single api by id
    var id = req.params.id;
    API.findByIdAndUpdate(id, {name: "NEW NAME"}, function(err, apis) {
      console.log(apis);
      res.json({message: 'you requested to update the api resource with id#' + req.params.id});
    })
  })
  .delete(function(req, res, next) {
    var id = req.params.id;
    API.findByIdAndRemove(id, {name: "soon to be deleted?"}, function(err, apis) {
      console.log(apis);
      //console.log(api);
      res.json({message: 'you requested to delete api resource with id# ' + req.params.id});
    })
  })

//root of APIs resource
APIs.route('/?')
  .get(function(req, res, next) {
    API.find(function(err, apis) {  // what does .find do. 
      // Also, plural, because you're asking for all of them here? 
      console.log(apis);
      console.log(err);
      res.json(apis);
    })
  })
  .post(function(req, res, next) {
    API.create({name: 'Example'}, function(err, api) {
      console.log(api);
      res.json(api);
    })
  }) 

module.exports = APIs;
