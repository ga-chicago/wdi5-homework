for (i = 0; i <= 20; i++) {
  if (i % 2 === 0) console.log(i + ' is even');
  else console.log(i + ' is odd')
}

for (i = 0; i <= 10; i++) {
  var multiply = (i * 9);
  var result = (i + ' * 9 = ' + multiply);
  console.log(result);
}

function assignGrade (score) {
  if (score >= 90) {
    return (score = 'A');
  } else if (score <= 89 && score >= 80) {
    return (score = 'B');
  } else if (score <= 79 && score >= 70){
    return (score = 'C');
  } else if (score <= 69 && score >= 60) {
    return (score = 'D');
  } else if (score <= 59 && score >= 50) {
    return (score = 'F');
  }
    
}

console.log(assignGrade(95))
console.log(assignGrade(85))
console.log(assignGrade(75))
console.log(assignGrade(65))
console.log(assignGrade(55))

for (grade = 60; grade <= 100; grade++) {
  console.log('For ' + grade + ', you got a ' + assignGrade(grade));
}





