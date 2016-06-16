var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 
//Filter out all odd numbers
var filtered = a.filter(function(value, i) {
  return value % 2 === 0;
});

console.log(filtered);

var filtered = a.filter(function(value, i) {
  return value % 2 === 1;
});

console.log(filtered);



