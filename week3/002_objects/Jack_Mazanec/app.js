function Turtle(name, color, weapon, attackStrength) {
  this.name = name;
  this.color = color;
  this.weapon = weapon;
  this.attackStrength = attackStrength;
}

turtle.prototype.catchPhrase = function(catchPhrase) {
  this.catchPhrase = catchPhrase;
} 


turtle.prototype.strengthBoost = function(strengthBoost) {
  this.attackStrength = this.attackStrength + strengthBoost;
  return this.name+'\'s strength is now '+this.attackStrength.toString();
} 


var Donatello = new Turtle('Donatello', 'purple','bo staff',4);
Donatello.catchPhrase('Uh...');

var Michelangelo  = new Turtle('Michelangelo ', 'orange','nunchucks',3);
Michelangelo.catchPhrase('Bodacious');

var Leonardo = new Turtle('Leonardo', 'blue','akimbo takana',2);
Leonardo.catchPhrase('Radical!');

var Raphael = new Turtle('Raphael', 'red','akimbo sai',1);
Raphael.catchPhrase('Totally tubular, dude!');

console.log(Leonardo.strengthBoost(59));
console.log(Donatello.catchPhrase);
console.log(Michelangelo.color);
console.log(Leonardo.weapon);
console.log(Raphael.name);
