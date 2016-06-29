var movie = require('./movie')

var movies = ["pineapple express", "rush hour", "forrest gump"];

movies.forEach(function(film){
	movie.get(film)
})