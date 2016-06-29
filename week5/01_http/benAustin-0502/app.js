var movie = require('./movie');

var threeFavoriteMovies = ['t=critters&y=&plot=full&r=json', 't=demons&y=&plot=full&r=json', 't=gremlins&y=&plot=full&r=json'];
var objects = [];
// threeFavoriteMovies.forEach(function(value){
//   console.log(movie.get(value));
// })

console.log('LOOK HERE!!!!!!!!!!!! WHY UNDEFINED' + movie.get(threeFavoriteMovies[1]));
