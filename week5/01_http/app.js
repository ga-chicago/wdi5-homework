

var movie = require("./movie");



var threeFavouriteMovies = ["pineapple express", "goodfellas", "goon"];
threeFavouriteMovies.forEach(function(film){
  movie.get(film);
})

console.log()
