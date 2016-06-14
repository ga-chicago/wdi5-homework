function calculateSupply(age, amt) {
  maxAge = 81;
  amt = Math.round(amt);
  totalCon = amt*365*(maxAge-age);
  return 'You will need '+totalCon+ ' bars of candy to last you until the ripe old age of '+maxAge;

}

console.log(calculateSupply(19,10));
console.log(calculateSupply(33,100));
console.log(calculateSupply(57,32.2));

//Define a function that takes two arguments one is a string one that is a number and concatinate them together as the output function

function numString(num, str) {
  return num.toString() + str;
}

numString(4,' hey');

function array(arr) {
  return console.log(arr[0]+' '+arr[1]+' '+arr[2]);
}

var arr = ['This right here','is my','swag'];
array(arr);

function concat(array) {
  return console.log(array[0][0]+array[0][1]+array[0][2]+array[1]);
  
}

var arr= [['yo','yo','yo'],'hey'];
concat(arr);
