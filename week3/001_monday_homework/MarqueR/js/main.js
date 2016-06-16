
// 1.)
// Function accepts an array of strings,   //
// calculates the length of each, makes an //
// array of lengths, returns the new array //
/////////////////////////////////////////////

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


// 2.)
// Function accepts three numbers //
// and  'transmogrifies' them     //
////////////////////////////////////

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


// 3.)
// Function checks for accent sentence is // 
// spoken in, returns colloquial version  //
////////////////////////////////////////////

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


// 4.)
// Function reverses a string //
////////////////////////////////

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


// 5.)
// Function reverses each word in a string //
// but keeps the words in original order   //
/////////////////////////////////////////////

function letterReverse (anyString) {
  var newString = anyString.split("").reverse().join("").split(" ").reverse().join(" ");
  console.log(newString);
}
letterReverse ('a blisterpod corpse is a scion cradle');
letterReverse ('a dopretsilb esproc si a noics eldarc');


// 6.)
// Function accepts an array of strings   //
// and determines which string is longest //
////////////////////////////////////////////

var magic = ['blighted', 'rumbler', 'zendikar', 'bellows', 'gnarlid', 'rugged', 'forest', 'mountain', 'gaea', 'animist', 'evolving', 'sliderunner', 'predator', 'pilgrimage', 'vastwood', 'retreat', 'scythe', 'swell', 'renewal'];
var numberMagic = [];
function longest(arrayOfStrings) {
  for (i = 0; i < arrayOfStrings.length; i++) {
    numberMagic.push(arrayOfStrings[i].length);
  }
  for (i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length === (Math.max(...numberMagic))) {
      console.log(arrayOfStrings[i]);
    }
  }
}
longest(magic);


// 7.)
// Outer function takes an input and an function  //
// inner function as arguments and logs result of //
// the input being passed to the inner function   //
////////////////////////////////////////////////////

function repMaster(inputed, functioneered) {
  console.log(functioneered(inputed) + 'proves that I am the rep MASTER!');
}
var ohMages = ['rumors', 'quickly', 'spread', 'among', 'thieves', 'about', 'a', 'labyrinth', 'without', 'walls', 'and', 'a', 'prize', 'beyond', 'all', 'measures', 'of', 'worth']
function theMagicShuffle(magicArray) {
  var magicString = '';
  for (i = 0; i < magicArray.length; i++) {
    magicString += (magicArray[i] + ' ');
  }
  return magicString;
}
repMaster(ohMages, theMagicShuffle);


















