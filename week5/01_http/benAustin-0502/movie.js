var http = require('http');

var critters = 't=critters&y=&plot=full&r=json';
var demons = 't=demons&y=&plot=full&r=json';
var gremlins = 't=gremlins&y=&plot=full&r=json';


function get (movieTitle) {
  var request = http.get('http://www.omdbapi.com/?' + movieTitle, function(response) {
    console.log ('got response ' + response.statusCode);

    var body = ""
    response.on('data', function(chunk){
      console.log('BODY: ' + chunk);
      body += chunk;
    })

    response.on('end', function() {
      if (response.statusCode === 200) {
        var film = JSON.parse(body); //whats going on here
       console.log(film);
      }
      else {
       console.log(response.statusCode);
      }
    })
  })
}
console.log(get(critters));

module.exports.get = get;
