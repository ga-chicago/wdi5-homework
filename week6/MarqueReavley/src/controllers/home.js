 
//  H O M E   C O N T R O L L E R
//  =============================

//  Dependencies
//  ------------
var express = require('express'),
    Home    = express.Router(),
    fs      = require('fs');

//  Define information from JSON 'database'
//  ---------------------------------------    


//  Define search for specific person
//  ---------------------------------
Home.route('/searched')
  .post(function(req, res, next) {
        
    var id       = parseInt(req.params.id),
        search   = fs.readFileSync(__dirname + '/../db/datasource.json'),
        search   = JSON.parse(search.toString()),
        person;

    for (var index in search) {
      if (search[index].name === req.body.name) {
        person = search[index];
      }
    };

    console.log(person);

    res.render('home', {'person': person.name});

  });

//  Define request for a random person
//  ----------------------------------
Home.route('/random')
  .post(function(req, res, next) {

    var id     = parseInt(req.params.id),
        random = fs.readFileSync(__dirname + '/../db/datasource.json'),
        random = JSON.parse(random.toString()),
        person = random[Math.floor(Math.random() * random.length)];
        
        console.log('\n');
        console.log(person.index);
        console.log("..................................");
        console.log(person);
        console.log("..................................");

        person = person.name;

    res.render('home', {'person': person});

  });

//  Define the home page
//  --------------------
Home.route('/?')
  .get(function(req, res, next) {

    res.render('home', {
      pageTitle: 'Person Place'
    });
  });

module.exports = Home;







// app.post('/maillist', function(req, res, next) {
//   var thanks = 'Thanks! We\'ll send you a shit load of email you don\'t care to read later on!'
//   res.render('maillist', {'thanks': thanks})
// })
