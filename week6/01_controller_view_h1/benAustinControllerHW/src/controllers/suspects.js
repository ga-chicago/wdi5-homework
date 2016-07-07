// require dependencies
var express  = require('express'),
    Suspects = express.Router(),
    fs       = require('fs');

Suspects.route('/:guide/?')
  .get(function(req, res, next) {
    var guide    = parseInt(req.params.guide),
        suspects = fs.readFileSync(__dirname + '/../db/suspects.json');

        suspects = JSON.parse(suspects.toString());

        res.render('reports', {
          pageTitle: suspects[guide].name,
          eyeColor: suspects[guide].eyeColor,
          age: suspects[guide].age,
          balance: suspects[guide].balance,
          isActive: suspects[guide].isActive,
          about: suspects[guide].about
        })
  });

module.exports = Suspects; 
