// Problem 1

for(i =0; i<=20; i++) {
  if (i%2===0) {
    console.log(i.toString() + ' is even');
  }
  else {
    console.log(i.toString() + ' is odd');
  }
}

// Problem 2

for(i =0; i<=10; i++) {
    console.log(i.toString() + 'x9='+(i*9).toString());
}

// Problem 3

function assignGrade(score) {
  if(score>=90) {
    return 'A';
  }
  else if(score>=80) {
    return 'B';
  } 
  else if(score>=70) {
    return 'C';
  } 
  else if(score>=60) {
    return 'D';
  }
  else if(score>=90) {
    return 'F';
  }
  else {
    return 'Incomplete';
  }
}

// Problem 4

for(i =60; i<=100; i++) {
  console.log('For '+ i.toString()+', you got an '+assignGrade(i).toString());  
}

