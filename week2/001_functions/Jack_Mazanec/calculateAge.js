function calculateAge(birthYear, currentYear) {
  option1 =  currentYear - birthYear;
  option2 = currentYear - birthYear-1;
  return 'You are either '+ option2.toString() + ' or '+ option1.toString()+ ' years old.'
}

console.log(calculateAge(1997, 2016));
console.log(calculateAge(1990, 2016));
console.log(calculateAge(1997, 2097));
