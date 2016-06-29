var http = require('http');

function getMovies(movieTitle) {
  var request = http.get('http://www.omdbapi.com/?t=' + movieTitle + '&y=&plot=short&r=json', function(movieRes) { 

    var body = "";
      movieRes.on('data', function(info) {
      body += info;
    });

    movieRes.on('end', function() {
      if (movieRes.statusCode === 200) {
        console.log('\n');
        console.log("Status code: " + movieRes.statusCode);
        var movieInfo = JSON.parse(body);
        console.log(movieInfo.Title);
        console.log(movieInfo.Director);
        console.log(movieInfo.Plot);
        console.log(movieInfo.Year);
        console.log(movieInfo.Rated);
      } else {
        console.log("Status code: " + movieRes.statusCode);
      }
    });

  });
}

module.exports.get = getMovies;
