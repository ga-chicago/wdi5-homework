// Calculate Birth Year //

var currentYear = new Date().getFullYear();


function calculateAge (birthYear, currentYear) {
  var ageOne = currentYear - birthYear;
  var ageTwo = currentYear - birthYear - 1;
  console.log('You are either ' + ageOne + ' or ' + ageTwo);
}

calculateAge(2006, currentYear);


//-------------------------------------------------------------//

  // Calculate Lifteime Supply //


function calculateSupply (age, amountPerDay) {
  var maxAge = 100;
  var amountTotal = (maxAge - age) * 365 * amountPerDay;
  if (age < maxAge) {
    console.log('You will need ' + amountTotal + ' to last you until the ripe old age of ' + maxAge);
  } else {
    console.log('Sorry buddy, you have either reached or exceeded the maximum age');
  }
}
calculateSupply(104, 2);
  



// ------------------------------------------//


function concatinate (string, number) {
  var numberToString = number.toString();
  return string + " " + numberToString;
}
  concatinate("hi", 4);
  
  
  
  
// ----------------------- //
function concat (theArray) {
  return theArray[0] + theArray[1] + theArray[2]
}
 
concat ([ 'hi', 'bye', 'yo']);


or


function concat (array) {
  console.log(array.join(' '))
}

// ----------------------------------- //

function concat (parentArray) {
  return stuArray[0][0] + stuArray[0][1] + stuArray[0][2] + stuArray[1]

}
