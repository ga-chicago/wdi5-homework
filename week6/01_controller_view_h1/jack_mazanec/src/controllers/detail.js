// Require dependecies

var express = require('express'),
    Detail   = express.Router(),
    fs      = require('fs');

Detail.route('/:id/?')

  .get(function(req, res, next) {
    var people = fs.readFileSync(__dirname + '/../db/people.json');  
    var id    = parseInt(req.params.id)

    people = JSON.parse(people.toString());

    res.render('detail', {
      pageTitle:  'Detail',
      people: people[id]
    });
  })


module.exports = Detail;
