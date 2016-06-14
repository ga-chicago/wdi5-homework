
// Function accepts array of strings, 
// calculates length of each, makes an 
// array of lengths, returns the new array
//////////////////////////////////////////

var threats = ["basilisks", "hollows", "skeletons", "capras", "drakes", "rats", "boars", "invaders", "gargoyles"];
var stringLengths = [];
function lengths(arrayOfStrings) {
  for (i = 0; i < arrayOfStrings.length; i++) {
    console.log(arrayOfStrings[i].length);
    stringLengths.push(arrayOfStrings[i].length);
  }
  return stringLengths;
}
lengths(threats);

// Function accepts three numbers, 'transmogrifies' them
////////////////////////////////////////////////////////

function transmogrifier(x, y, z) {
  var multiTable = [];
  var mult = x * y;
  multiTable.push(mult);
  for (i = 0; i < (z - 1); i++) {
    mult = mult * mult;
    multiTable.push(mult);
  }
  console.log(multiTable);
}
transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);

// Function checks for accent sentence is 
// spoken in, returns colloquial version
/////////////////////////////////////////

function toonify(accent, sentence) {
  if (accent === 'daffy') {
    var colloquial = sentence.replace(/s/g, 'th');
  } else if (accent === 'elmer') {
    var colloquial = sentence.replace(/r/g, 'w');
  } else {
    var colloquial = sentence;
  }
  console.log(colloquial);
}
toonify('daffy', 'so you smell like sausage');
toonify('elmer', 'rascally rabbits really rile me up');

// Function reverses a string
/////////////////////////////

function wordReverse(string) {
  var wordsList = string.split(' ');
  wordsList.reverse();
  var newString = "";
  // for (var word in wordsList) {
  //   var newString = newString + " " + word;
  // }
  for (i = 0; i < wordsList.length; i++) {
    newString += wordsList[i] + " ";
  }
  console.log(newString);
}
wordReverse('assemble your terminator squad and assault space hulk sin of damnation via boarding torpedo extreme genestealer infestation')































