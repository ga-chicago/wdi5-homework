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

var sentence = "so you smell like sausage";

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

var string = "Now I know what a TV dinner feels like";

var wordReverse = function (string) {
  var array = string.split(" ");
  array.reverse();
  var newArray = array.join(" ");
  return newArray;
}

wordReverse("Now I know what a TV dinner feelse like");
