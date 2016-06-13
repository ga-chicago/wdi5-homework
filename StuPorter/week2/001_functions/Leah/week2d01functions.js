


//function calculateAge (birth, current) {
 // var age = current - birth  ;
 // return age
  //var otherAge = age -1 ;
  //return otherAge

//}
 
//var age1= calculateAge(1980, 2016)
 //console.log(age1);

function age(birth, current){
  return current - birth;
}

var age1 = age(1980, 2016)
//console.log(age1);


function age2 (birth, current) {
  return (current - birth) - 1;
}

var minusOne = age2(1980, 2016)
//console.log(minusOne);

function calculateAge (age1, minusOne) {
  return 'You are either' + ' ' + age1 + ' ' + 'or' + ' ' + minusOne
  
}

var answer = (calculateAge(age1, minusOne));

console.log(answer)


//function calculateSupply (age, amtPDay) {
//  var consumed = amtPDay * maxAge 
//}



function yearsLeft (maxAge, age) {
  return maxAge - age;
  
}
var years = yearsLeft(85, 36)
//console.log(years)

function daysLeft (years){
  return years * 365
}

var days = daysLeft(years)
//console.log(days)

function supply (days, amtPDay) {
  return days * amtPDay
}
var supply = supply(days, 2)
//console.log(supply)

function calculateSupply (supply, maxAge) {
  return 'you will need ' + supply +' cups'+ " " + 'to last until the ripe old age of ' + maxAge
}
var calc =(calculateSupply(supply, 85));
console.log(calc)

// figure out how to incorporate prompts to get input from user and return other answers with passing values direct???
