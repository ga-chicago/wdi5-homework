//Problem 1
// declare function named "lengths"
// that accepts a arguments named "arrayOfStrings"
var words = ["hello", "what", "is", "up", "dude"]
// lengths(words)  # => [5, 4, 2, 2, 4]

function lengths(arrayOfStrings) {
  var lengthArray = [];
  for (i = 0; i < arrayOfStrings.length; i++) {
    lengthArray[i] = arrayOfStrings[i].length;
    
  } 

  return lengthArray

}

/// Problem 2
function transmogrifier (x, y, z) {
  var power = (x * y);
  return Math.pow(power, z)
}
transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

///Problem 3
function toonify(accent, sentence) {
    if (accent === 'daffy') {
      var result = sentence.replace(/s/g, 'th');
    } else if (accent === 'elmer') {
      var result = sentence.replace(/r/g, 'w');
    } else {
      var result = sentence;
    }
    console.log(result)
} 


///Problem 4
function wordReverse(string) {
  return string.split(" ").reverse().join(' ');
}
 wordReverse('please work this time')
 
 //Problem 5
 function letterReverse (array) {
    return array.split(" ").map(function(val){ return val.split("").reverse().join("")}).join(" ");
}

//Problem 6
function longest(arr){
  return arr.sort(function(a,b){return a.length > b.length})[0];
}
    
//Problem 7
function toUpperCase(someString){
  return someString.toUpperCase();
}

function repMaster (param, func) {
   return func(param) + "  proves that I am the rep MASTER!";
}






