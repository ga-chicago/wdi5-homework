
var movie = require("./movie");


var threeFavouriteMovies = ["Splash", "labyrinth", "frozen"];
threeFavouriteMovies.forEach(function(film) {
  movie.get(film);
});
