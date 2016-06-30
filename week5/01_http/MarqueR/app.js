var movie               = require('./movie'),
    threeFavoriteMovies = ['Mulholland Drive', 'Crimson Peak', 'Masculin Feminin'];

threeFavoriteMovies.forEach(function(film) {
  var movieTitle = film.split(' ').join('+');
  movie.get(movieTitle);
});
