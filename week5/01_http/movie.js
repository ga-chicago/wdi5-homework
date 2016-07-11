var http = require('http');

function getMovie(userTitle){
  var formatMovieTitle = userTitle.split(" ").join('+');
  var request = http.get('http://www.omdbapi.com/?t='+ formatMovieTitle +'&y=&plot=short&r=json', function(response){
    
    var body = "";
    response.on('data', function(chunk){
     

      body += chunk;
    })

     response.on('end',function(){
      if(response.statusCode === 200){
        var movieInfo = JSON.parse(body);

       

        console.log(movieInfo["Title"] + ", stars " + movieInfo["Actors"] +" and was rated " + movieInfo["Rated"] + ", and was made in " + movieInfo["Year"]);
        

        console.log("the movie is about " + movieInfo["Plot"]);
        
        console.log("//***NEXT MOVIE BELOW***//");
      }else{
        console.log(response.statusCode);
      }
    })

  })
}

module.exports.get = getMovie;
