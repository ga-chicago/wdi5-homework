//// First four problems completed.

////Part 1
//////////

//The purpose of part one is list the array's length of charachters from "var = pitches"
//To do this I need to make two variables. 1 for the array and 1 for the open bracket string length
// I also need a for loop to make sure the loop goes through the entire array.
// once that is done I will push the array of string lengths to the open bracket "stringLengths"


var pitches = ["fastball", "curveball", "changeup", "slider", "knuckleball", "gyroball", "sinker", "cutter"];

var stringLengths = [];

function lengths(arrayOfStrings) {
  for (i = 0; i < arrayOfStrings.length; i++) {
    console.log(arrayOfStrings[i].length);
    stringLengths.push(arrayOfStrings[i].length);
  }
  return stringLengths;
}
  


////Part 2
//////////

//For part two you must make a function with 3 arguments.
// you must also make a variable "multiTable" with open brackets
// with the multiTable you want to push the the mult to get the first miltitable
// and then you will need a for loop

function transmogrifier (one, two, three) {
  return Math.pow((one * two), three);
}

transmogrifier(5, 5, 2);

transmogrifier(10, 10, 1);

transmogrifier(4, 4, 2);



////Part 3
//////////


function toonify(accent, sentence) {
  
  if (accent === 'daffy') {
    var replacement = sentence.replace(/s/g, 'th');
  } else if (accent === 'elmer') {
    var replacement = sentence.replace(/r/g, 'w');
  } else {
    var replacement = sentence;
  }
  console.log(replacement);
}

toonify('daffy', 'so you smell like sausage');
toonify('elmer', 'rascally rabbits really rile me up');

////Part 4
//////////

function wordReverse(string) {
  var wordsList = string.split(' ');
  wordsList.reverse();
  var newString = "";
 
  for (i = 0; i < wordsList.length; i++) {
    newString += wordsList[i] + " ";
  }
  console.log(newString);
}
wordReverse('assemble your terminator squad and assault space hulk sin of damnation via boarding torpedo extreme genestealer infestation')



//Part 5
////////




































