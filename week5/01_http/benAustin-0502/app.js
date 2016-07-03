var movie = require('./movie');

var threeFavoriteMovies = ['t=demons&y=&plot=full&r=json', 't=gremlins&y=&plot=full&r=json', 't=critters&y=&plot=full&r=json'];

threeFavoriteMovies.forEach(function(film){
  movie.get(film);
})
