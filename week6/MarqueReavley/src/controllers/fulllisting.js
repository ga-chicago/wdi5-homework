
//  L I S T I N G   C O N T R O L L E R
//  =============================

//  Dependencies
//  ------------
var express     = require('express'),
    Fulllisting = express.Router(),
    fs          = require('fs');

//  Define the homepage
//  -------------------
Fulllisting.route('/?')
  .get(function(req, res, next) {
    
    var listings = fs.readFileSync(__dirname + '/../db/datasource.json');

    listings = JSON.parse(listings.toString());


    res.render('fulllisting', {
      pageTitle: 'Listings',
      listings:  listings
    })

  })

module.exports = Fulllisting;
