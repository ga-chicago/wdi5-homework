var movie = require("./movie");

// var morvern = 'http://www.omdbapi.com/?t=morvern+callar&y=&plot=short&r=json';
// var avv = "http://www.omdbapi.com/?t=l'avventura&y=&plot=short&r=json";
// var wave = 'http://www.omdbapi.com/?t=wavelength&y=&plot=short&r=json';

var threeFavouriteMovies = ["Morvern Callar", "L'Avventura", "Wavelength"];

threeFavouriteMovies.forEach(function(film){
  var movieTitle = film.split(' ').join('+');
  movie.get(movieTitle);

})


