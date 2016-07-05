var http = require('http');

function getMovie(userTitle){
  var formatMovieTitle = userTitle.split(" ").join('+');
  var request = http.get('http://www.omdbapi.com/?t='+ formatMovieTitle +'&y=&plot=short&r=json', function(response){
    //console.log("got response " + response.statusCode);
    var body = "";
    response.on('data', function(chunk){
      // console.log("BODY: " + chunk)
      body += chunk;
    })
    response.on('end',function(){
      if(response.statusCode === 200){
        var movieInfo = JSON.parse(body);
        //console.log(movieInfo);
        console.log(movieInfo["Title"] + ", starring " + movieInfo["Actors"] +", was rated " + movieInfo["Rated"] + ", and was made in " + movieInfo["Year"]);
        console.log("//////");
      }else{
        console.log(response.statusCode);
      }
    })

  })
}

module.exports.get = getMovie;
