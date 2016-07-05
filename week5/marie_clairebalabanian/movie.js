var http = require('http');


function printError(error) {
  console.error(error.message)
}



function getMovie(movie) {
  var request = http.get('http://www.omdbapi.com/?t' + movie + '&plot=short&r=json', function(response){
  // console.log('got response ' + response.statusCode);

  var body = ""
  response.on('data', function(chunk) {
    console.log('BODY: ' + chunk);
    body += chunk;
  })


  response.on('end', function() {
    if (response.statusCode === 200) {
      var movie = JSON.parse(body);
      console.log(movie.Title, movie.Year, movie.Awards);
    }
    else {
        console.log('error');
    }
  })
})
  request.on('error', printError)
}

module.exports.get = getMovie;
