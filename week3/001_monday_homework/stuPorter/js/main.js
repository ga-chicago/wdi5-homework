//// First four problems completed.

////Part 1
//////////

//declare a function known as arrayOfStrings

var pitches = ["fastball", "curveball", "changeup", "slider", "knuckleball", "gyroball", "sinker", "cutter"];
var numbers = [];


var lengths = function (arrayOfStrings) {
  for (var i = 0; i < pitches.length; i++)
  numbers.push(pitches[i].length);
  console.log(numbers);
  return numbers;
}
lengths();


////Part 2
//////////

// var transmogrifier = function (s, t, u) {
//   console.log(Math.pow(s*t), u);
// }

// console.log(transmogrifier(5, 4, 3));

function transmogrifier (s, t, u) {
  return Math.pow((s * t), u);
}

console.log(transmogrifier(5, 2, 3));
console.log(transmogrifier(4, 4, 4));
console.log(transmogrifier(7, 2, 2));


////Part 3
//////////

var sentence = "so you smell like sausage";

var toonify = function (accent, sentence) {
  if (accent === "daffy") {
    return sentence.replace(/s/g, "th");
  } else if (accent = "elmer") {
    return sentence.replace(/r/g, "w")
  }
}
toonify("daffy", "so you smell like sausage");
toonify("elmer", "I'm going to get that silly rabbit");


////Part 4
//////////


///1
//The split() method is used to split a string into an array of substrings, 
//and returns the new array.

///2
//this will reverse the array by words

///3
//this new array will join the words back together, but in reversed order

var string = "Time to go to the game"

var wordReverse = function (string) {
  var array = string.split(" ");
  array.reverse();
  var newArray = array.join(" ");
  return newArray;
}

wordReverse(string)


////Part 5
//////////

function letterReverse (str) {
  return str.split(" ").map(function(val){return val.split("").reverse().join("")}).join(" ");
}

console.log(letterReverse("Time to go to the game"));
console.log(letterReverse("Now I want to go to dinner"));


////Part 6
//////////

var objects = ['Tyler','Dakoda','Marion','Ken','verylongnamehere'];

function amount(array){

var long = 0;//starts array control, populates with most recent string length
var longest='';//will populate with longest string at the moment

for(var i=0; i < array.length; i++){//cycle through the string
    if(array[i].length > long){//
        var long = array[i].length;//store length of longest string, so far
        longest = array[i];//store longest string, so far
    }
}
        return longest;

}
console.log(amount(objects));

////Part 7
//////////

function toUpperCase(someString){
  return someString.toUpperCase();
}

function repMaster (parameter, func) {
   return func(parameter) + "  proves that I am the rep MASTER!";
}
console.log(repMaster("Never give your heart to a blockhead", wordReverse));
console.log(repMaster("I finished this practice", toUpperCase));
console.log(repMaster("I finished this practice", wordReverse));



////Completed
/////////////
