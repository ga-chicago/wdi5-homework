var mov = require('./movie.js');

// mov.get("the MASK");


var threeFavouriteMovies = ["being john malkovich", "the big lebowski", "true lies"];
threeFavouriteMovies.forEach(function(film){
  mov.get(film);
})

 
 // var mySent = "all my children";
 // console.log(mySent.split(" ").join('+'));
