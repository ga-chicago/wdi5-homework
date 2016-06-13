// Stu Porter Homoework for 6/7/2016 "Loops Homework"

//problem 1


for (var i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}


// problem 2

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var mapped = a.map(function(item, i){
  return item * 9;
  });

console.log(a);
console.log(mapped);



// problem 3


function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log('You have reicieved a ' + assignGrade(95));
console.log('You have recieved a ' + assignGrade(85));
console.log('You have recieved a ' + assignGrade(75));
console.log('You have recieved a ' + assignGrade(65));
console.log('You have recieved a ' + assignGrade(60));

// problem 4

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 60) {
        return 'D';
    } else {
        return 'F';
    }
}

for (var i = 60; i <= 100; i++) {
  console.log('For ' + i + ', your grade is a ' + assignGrade(i));
}


// end of homework
