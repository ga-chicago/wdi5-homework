// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (var i = 0; i <= 20; i++){
  if (i % 2 === 0) {
    console.log(i + " is even");
  }
  else {
    console.log(i + " is odd");
  }
}	
	
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for (var i = 1; i<=10; i++) {
  for (var j = 1; j <=10; j++) {
  console.log(i * j);
  }
}

// Write a function named assignGrade that: takes 1 argument, a number score. returns a grade for the score, either "A", "B", "C", "D", or "F". Call that function for a few different scores and log the result to make sure it works.

function assignGrade (score) {
  var grade = "";
  if (score < 60) {
    grade = "F";
  } else if (score < 70) {
    grade = "D";
  } else if (score < 80) {
    grade = "C"; 
  } else if (score < 90) {
    grade = "B";
  } else if (score >= 90) {
    grade = "A";
  } else grade = "Please input valid score";
return grade;
}
  console.log(assignGrade(62));
  console.log(assignGrade(80));
  console.log(assignGrade(-3));
  console.log(assignGrade("fish"));
  console.log(assignGrade(89));
  console.log(assignGrade(89.99));
  console.log(assignGrade(90));

// Check the results of assignGrade function from the previous exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

for (var i = 60; i <=100; i++)  {
  console.log("For " + i + " you got a " + assignGrade(i)) + ". ";
}
