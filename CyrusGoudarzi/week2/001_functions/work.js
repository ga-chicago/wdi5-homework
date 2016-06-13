function calculateAge(birthYear, currentYear) {
  var option1 = currentYear - birthYear
  var option2 = currentYear - 1 - birthYear;
  return ' You are either ' + option1 + ' or ' + option2 
}

var result = calculateAge(1988, 2016);

console.log(result); 
  


function age(birthYear, currentYear) {
  var option3 = currentYear - birthYear;
  var option4 = currentYear - 1 - birthYear;
  return ' You are either ' + option3 + ' or ' + option4
}

var result2 = age(1963, 2016)

console.log(result2);


function years(birthYear, currentYear) {
  var option5 = currentYear - birthYear;
  var option6 = currentYear - 1 - birthYear;
  return ' You are either ' + option5 + ' or ' + option6
}

var result3 = years(1993, 2016)

console.log(result3); 


var maxAge = 86;
function calculateSupply(age, amountPerDay) {
  return = (maxAge - age) * amountPerDay *365
  var message = ' You will need ' + amountPerDay + ' to last until the age of ' + maxAge
}

 var result = calculateSupply(28, 4)

console.log(result)





