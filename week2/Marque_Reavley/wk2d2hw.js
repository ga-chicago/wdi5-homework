


console.log("For loop 0-20, logging whether each number is even or odd.");
for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
console.log("\n");


console.log("For loop 0-10, logging result of each number multiplied by 9.");
for (var i = 0; i <= 10; i++) {
  var result = i * 9;
  console.log(i + " x " + "9  = " + result);
}
console.log("\n");


console.log("For loop logging multiplication tables for all numbers 1-10");
for (var y = 1; y <= 10; y++) {
  var multiplier = [];
  for (var x = 1; x <= 10; x++) {
    result = x * y;
    multiplier.push(result);
  }
  console.log(multiplier);
}
console.log("\n");



console.log("Function taking a number score and converting it to a letter grade");
function assignGrade(score) {
  if (score > 90) {
    grade = "A";
  } else if (score > 80) {
    grade = "B";
  } else if (score > 70) {
    grade = "C";
  } else if (score > 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  return ("If you get a score of " + score + ", your grade will be: " + grade + ".");
}

for (var kidsInClass = 1; kidsInClass <10; kidsInClass++) {
  var grade;
  var score = Math.ceil((Math.random()) * 100);
  console.log(assignGrade(score));
}
console.log("\n");
