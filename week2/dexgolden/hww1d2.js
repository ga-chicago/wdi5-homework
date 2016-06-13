
//DEXTER GOLDEN
//HOMEWORK #1
for(var x = 0; x<=20; x++){
  if(x % 2== 0){
    console.log(x + ": even");
  }else{
    console.log(x + ": odd");
  }
}
console.log('\n');



//HOMEWORK #2
var a = [1,2,3,4,5,6,7,8,9,10]
var mapped = a.map(function(item, index) {
  return item * 9;
});
console.log(mapped);
console.log('\n');


////HOMEWORK #2 BONUS
var b = [];

for(var x = 1; x <=10; x++){
  var out = [];  
  for(var y =1; y<=10; y++){
    out.push(x*y);    
  }
  console.log(out);
};
console.log('\n');


//HOMEWORK #3
// ASSIGN GRADE
function assignGrade(score) {
  if(score >= 90){
    return "A";
  }else if(score >= 80){
    return "B";
  }else if(score >= 70){
    return "C";
  }else if(score >= 60){
    return "D";
  }else{
    return "F";
  }
}
console.log('\n');


//HOMEWORK #4
for(var userScore = 59; userScore <= 100; userScore++){
  console.log("For score " + userScore + ", you get a " + assignGrade(userScore));
}



