
function Turtle(name, weapon, maskColor) {
  this.name = name;
  this.weapon  = weapon;
  this.maskColor = maskColor;
}

Turtle.prototype.talk = function(first_argument) {
  return 'Hello my name is ' + this.name;
};

Turtle.prototype.grabWeapon = function() {
  return 'Want to see my ' + this.weapon; 
};

Turtle.prototype.eating = function(slicesOfPizza) {
  return 'Currently eating ' + slicesOfPizza + ' slices Of Pizza ';
};

var michaelAngelo = new Turtle('Michael Angelo', 'nunchuks', 'orange');
var donatello = new Turtle('Donatello', 'bo staff', 'purple');
var ralphael = new Turtle('Ralphael', 'sais', 'red');
var leonardo = new Turtle('Leonardo', 'katanas', 'blue');

leonardo.grabWeapon();

michaelAngelo.talk();

ralphael.eating(3);

console.log(donatello.maskColor);




