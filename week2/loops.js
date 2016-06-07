
for(var x = 0; x <= 20; x++){
   if (x % 2 === 0){  
  console.log( x+ ' is even') 
  }else{
  console.log(x +' is odd')
  }
}

for(var x = 0; x <=10; x++){
  var result = x * 9;
  console.log(x + ' * 9 ='+ result)
};

function assignGrade (score) {
  if(score >= 90 && score <= 100){
    console.log('A')
  }else if(score >= 80 && score <= 89){
    console.log('B')
   }else if(score >= 70 && score <= 79){
    console.log('C')
   }else if(score >= 60 && score <= 69){
    console.log('D')
   }else if(score >= 0 && score <=59){
    console.log('F')
    }else
    console.log('no score')   
    
};

assignGrade();


for(var x = 60; x < 101; x++){
  var grade = assignGrade(x);
  console.log('For ' +  x  + ' you got a' );
};
//console.log('For' + x +'you got a ' + grade)
