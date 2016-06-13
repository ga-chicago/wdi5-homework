
// my attempt at the hw w2d2 problem 2

function calculateSupply(age, food) {
	return console.log('You will need ' + food + " to last until the ripe age of " + age )
}

calculateSupply('85', 'pickles');

calculateSupply('62', 'hamburgers')

calculateSupply('90', 'apples')

var maxAge = 78;


// an alternative way to do hw 2 *THE RIGHT WAY IN CLASS* below


function calculateSupply(age, amountPerDay) {
  var maxAge = 78;
  return (maxAge - age) * amountPerDay * 365
  console.log(maxAge)
  
}

calculateSupply(30, 20);


// some variable addition w/ functions below


var someAddition = function(a, b) {
  return a + b
}

someAddition(2, 4)
