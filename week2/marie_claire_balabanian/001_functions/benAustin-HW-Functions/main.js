/*
Problem #1

Forgot how old you are? Calculate it!

Write a function named calculateAge that:

Takes 2 arguments: birth year, current year.
Calculates the 2 possible ages based on those years.
Outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
Problem 2

The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:

Takes 2 arguments: age, amount per day.
Calculates the amount consumed for rest of the life (based on a constant max age).
Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

var currentYear = new Date().getFullYear();

function determineAge(birthYear) {
  return (currentYear - birthYear);
}
console.log(determineAge(1990));

//This does what part 1 of the homework asked to accomplish
function calculateAge(age) {
  return "You are either " + (age - 1) + " or " + (age) + ".";
}
console.log(calculateAge(determineAge(1990)));

//This does what Part 2 of the homework asked to accomplish
function calculateSupply(age, maxAge, amountPerDay) {
  var lifeLeft = maxAge - age; 
  return "You will need " + (amountPerDay * lifeLeft) + " to last you until the ripe old age of " + maxAge + "."; 
}
console.log(calculateSupply(determineAge(1990), 100, 5)); 

