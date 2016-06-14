// ********************  Round 1  *******************
// declare function named "lengths"
// that accepts a arguments named "arrayOfStrings"
function lengths(arrayOfStrings) {
  return arrayOfStrings.map(function(val){return val.length});
}
var words = ["hello", "what", "is", "up", "dude"]
console.log(lengths(words));
// lengths(words)  # => [5, 4, 2, 2, 4]

// ********************  Round 2  *******************
// Write a Javascript function called transmogrifier 
// This function should accept three arguments, which you can assume will be numbers. 
// Your function should return the "transmogrified" result
// The transmogrified result of three numbers is the product 
// (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
function transmogrifier(x,y,pow){
  return Math.pow(x*y, pow);
}

console.log(transmogrifier(5, 4, 3));
console.log(transmogrifier(13, 12, 5));
console.log(transmogrifier(42, 13, 7));

// ********************  Round 3  *******************
// Write a function called toonify that takes two parameters, accent and sentence.
// If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
// If the accent is "elmer", replace all "r" with "w".
// Feel free to add your own accents as well!
// If the accent is not recognized, just return the sentence as-is.
// Reference: MDN: String.replace()

function toonify(accent, sentence){
  switch (accent) {
    case 'daffy': return sentence.replace(/s/ig, 'th');
    case 'elmer': return sentence.replace(/r/ig, 'w');
    default: return sentence;
  }
}
console.log(toonify("daffy", "so you smell like sausage"));
// #=> "tho you thmell like thauthage"

// ********************  Round 4  *******************
// Write a function wordReverse that accepts a single argument, a string. 
// The method should return a string with the order of the words reversed. Don't worry about punctuation. 
// You'll need to use String.split() to create an array of words (splitting them with a space or " ". 
//   Then you'll need to reverse the order of that array using array.reverse(). 
//   Finally, you'll loop through them to create a new string).

function wordReverse(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(wordReverse("Now I know what a TV dinner feels like"));
// # => "like feels dinner TV a what know I Now"

// *******************  Round 5 ***********************
// Write a function letterReverse that accepts a single argument, a string. 
// The function should maintain the order of words in the string but reverse the letters in each word. 
// Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space.
// letterReverse("Now I know what a TV dinner feels like")

function letterReverse (str) {
  return str.split(" ").map(function(val){ return val.split("").reverse().join("")}).join(" ");
}
console.log(letterReverse("Now I know what a TV dinner feels like"));
// # => "woN I wonk tahw a VT rennid sleef ekil"
console.log(letterReverse("Put Hans back on the line"));
// # => "tuP snaH kcab no eht enil"

// *******************  Round 6 ***********************
// Write a function longest that accepts a single argument, an array of strings. 
// The method should return the longest word in the array. In case of a tie, the method should return 
// the word that appears first in the array.
function longest(arr){
  return arr.sort(function(a,b){return a.length > b.length})[0];
}

console.log(longest(["oh", "good", "grief"]));
// # => "grief"
console.log(longest(["Nothing", "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"]));
// # => "unrequited"

// **************** Final Round  ********************
// Write a function, called repMaster, that accepts two arguments, input and a function. 
// Input should be able to be used with the function. The function used as an argument must return a string. 
// repMaster should take the result of the string, passed as an argument to the argument function, 
// and return this result with ' proves that I am the rep MASTER!' concatenated to it.
// repMaster("Never give your heart to a blockhead", wordReverse) # =>
// "blockhead a to heart your give never proves that I am the rep MASTER!"
// repMaster("I finished this practice", toUpperCase);
// "I FINISHED THIS PRACTICE proves that I am the rep MASTER!"

function repMaster (param, func) {
  // if (func && typeof func == 'function') {
   return func(param) + "  proves that I am the rep MASTER!";
   //} else return param[func]();
}
console.log(repMaster("Never give your heart to a blockhead", wordReverse));
//console.log(repMaster("I finished this practice", toUpperCase));










