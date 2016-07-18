var express    = require('express'),
    Abouts     = express.Router(),
    fs         = require('fs'),
    bodyParser = require('body-parser');



Abouts.route('/about/?')
  .get(function(req, res, next) {
    res.render('about', {});
  })
  .post(function(req, res, next) {
    console.log(req.body);
    res.send('your question has been submitted!')
  });



Abouts.route('/contact/?')
  .get(function(req, res, next) {
    var contacts  = fs.readFileSync(__dirname + '/../db/data.json');

    res.render('contact', {
      contacts: JSON.parse(contacts.toString()) 
  });
});


module.exports = Abouts;
