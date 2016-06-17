//ROUND ONE

var words = ["hello", "what", "is", "up", "dude"]
var numbers = [];

var lengths = function (arrayStrings) {
  for (var i = 0; i < words.length; i++)
  numbers.push(words[i].length);
  console.log(numbers);
  return numbers;
}
lengths();



// ROUND TWO

var transmogrifier = function (x, y, z) {
  console.log(Math.pow((x*y), z));
}

//transmogrifier(5, 4, 3) = 8000
//transmogrifier(13, 12, 5) = 92389579776
//transmogrifier(42, 13, 7) = 14466001271480793000



// ROUND THREE


var toonify = function (accent, sentence) {
  if (accent === "daffy") {
    return sentence.replace(/s/g, "th");
  } else if (accent === "elmer") {
    return sentence.replace(/r/g, "w")
  } else {
    return sentence;
  }
}

//toonify("daffy", "so you smell like sausage");
//toonify("elmer", "radishes are really rad");



// ROUND FOUR


var wordReverse = function (string) {
  var array = string.split(" ");
  array.reverse();
  var newString = array.join(" ");
  return newString;
}

wordReverse("Now I know what a TV dinner feels like");



// ROUND FIVE

function letterReverse () {

}

// ROUND SIX


var longest = function (array) {
  var longLength = 0;
  var longestWord;

  for (var i = 0; i < array.length; i++ ) {
    if (array[i].length > longLength) {
      longLength = array[i].length;
      longestWord = array[i];
    } 
  }
  return longestWord;
}
//longest(["oh", "good", "grief"]);



// ROUND 7     

var toUpperCase = function (string){
  return string.toUpperCase();
}


var wordReverse = function (string) {
  var array = string.split(" ");
  array.reverse();
  var newString = array.join(" ");
  return newString;
}


var repMaster = function (input, func) {
  console.log(func(input) + ' proves that I am the rep MASTER!');
}
  
  
// repMaster("Never give your heart to a blockhead", wordReverse);
// repMaster("I finished this practice", toUpperCase);
  
  

  }
  





