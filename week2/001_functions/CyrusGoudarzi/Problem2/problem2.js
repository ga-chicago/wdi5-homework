function caclulateSupply (x, y) {
  var maxAge = 78
  return 'You will need ' + ((maxAge - x) * (365 * y)) + ' dollars to last you until the ripe old age of ' + maxAge
}

var age1 = caclulateSupply(24, 1)
var age2 = caclulateSupply(58, 2.50)
var age3 = caclulateSupply(12, 2.25)

console.log(age1)
console.log(age2)
console.log(age3)

//Define a function that takes two arguments,
//one that is a string and one that is a number, and
//caoncatinate them together as the output as a string

function makeString(num, string){
  num.toString();
  return num + ' ' + string;
}

//Define a function that takes an array as an argument, 
//the array should contain three strings.  concatinate all of those strings together as the output

function cat(theArray) {
  return theArray[0] + theArray[1] + theArray[2]
}

// define a function that takes an argument,
function cat (array, string) {
  return array[0][1] + array[0][2] + array[0][3] + string
}
