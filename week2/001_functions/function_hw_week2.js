





    // CALCULATE AGE BASED ON BIRTH YEAR AND CURRENT YEAR
    
var birthYr = prompt("What year were you born?");
var getYr = new Date();
var currentYr = getYr.getFullYear();

function calculateAge(birthYr, currentYr) {
  var age1 = currentYr - birthYr;
  var age2 = currentYr - birthYr + 1;
  return("You are either " + age1 + " or " + age2 + ".");
}

console.log(calculateAge(birthYr, currentYr));





    // CALCULATE HOW MANY SNACKS YOU NEED TO LAST THE REST OF YOUR LIFE

var age = prompt("How old are you now?")
var death = prompt("How old do you think you'll be when you die?")
var snack = prompt("What is your favorite snack?")
var dailyServing = prompt("How many snacks do you eat per day")

function calculateSupply(age, dailyServing) {
  var helpings = (((death - age) * 365) * Math.round(dailyServing));
  return "You will need " + helpings + " helpings of " + snack + " to last you until the ripe old age of " + death + ".";
}

console.log(calculateSupply(age, dailyServing));
