//  NODE SERVER
//  ===========

//  Dependencies
//  ------------

var express = require('express'),
    app     = express();

//  Setup serving of static files
//  -----------------------------

app.use(express.static(__dirname + '/public'));

//  The get function -> serves HTML as response
//  -------------------------------------------

app.get('/?', function(req, res, next) {
  res.sendFil(__dirname + 'public.index.html');
});

console.log('Now we\'re managing tasks and kicking the ass of all the task devils and other small evil creatures!');

//  Start the server!
//  -----------------

var server = app.listen(2666, function() {
  console.log('Your Gulp app has started at http://localhost:' + server.address().port);
});
