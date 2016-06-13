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
  
  
