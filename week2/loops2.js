// var animals = ['Horse', 'Bear', 'Aardvark', 'Bigger Horse']
// var i = 0
// while  (i < animals.length) {
//   console.log(animals[i]);
//   i++;     //so it adds to
// }


// for (var i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }


// animals.forEach(function(val) {      //the function is a call-back, anonymous function. only know to use (val, i) as arguments
//   console.log(val);
// });



var animal = {
  name: 'Horse',
  color: 'Brown',
  legs: 4,
  tail: true
};

for (var property in animal) {
  // console.log(property);
  console.log(animal[property]);  //gets value of the property
}


/// or to combine - console.log(property, animal[property]);





var animals = ['Horse', 'Bear', 'Another Horse']

var animalLowerCase = animals.map(function(animal) {
  return animal.toLowerCase();
})
console.log(animals);
console.log(animalLowerCase);


var bears = animals.filter(function(animal) {          // let's find all 'Bear's
  return animal === 'Bear';
})

console.log(animals);
console.log(bears);
