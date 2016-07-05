var http = require('http');

function getMovie(movie){
  var request = http.get('http://www.omdbapi.com/?t='+ movie +'&y=&plot=short&r=json' , function(response) {
    var body = ''

    response.on('data', function(chunk){
      body += chunk;
    
    })
    
    response.on('end', function() {
    
      if(response.statuscode = 200) {
        var movie = JSON.parse(body)
        console.log(movie.Title, movie.Year, movie.Awards)
      }
      else{
        console.log('there was an error')
      }
    

    // response.on('error', function(err) {
      // console.log(err);
    });
  
  });

}

module.exports.get = getMovie
