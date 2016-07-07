// // require dependencies
// var express      = require('express'),
//     SuspectsList = express.Router(),
//     fs           = require('fs');

// SuspectsList.route('/suspects')
//   .get(function(req, res, next) {
//     var suspects = fs.readFileSync(__dirname + '/db/suspects.json');

//     res.render('reportsList', {
//       pageTitle: 'Suspects List',
//       suspects: JSON.parse(suspects.toString()),
//     });
//   })

//   module.exports = SuspectsList;
