// 1

for (var i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  }
}


// 2

for (var i = 0; i < 11; i++) {
  var x = i * 9
  console.log(i + " * 9 = " + x );
}


// 3

var gradeAssignment = function (score) {
  if (score >= 90) {
    return "A";
  }
  else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else {
    return "F";
  }
}

// 4

for (i = 60; i <= 100; i++) {
  console.log("For " + i + " you got a " + gradeAssignment(i));
}

