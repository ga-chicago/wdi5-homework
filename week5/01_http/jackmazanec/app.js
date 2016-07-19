var movie = require('./movie');

var movies = ["forrest Gump", "Shawshank", "k-pax"];



movies.forEach(function(film, ind) {
  movie.get(film);


})
