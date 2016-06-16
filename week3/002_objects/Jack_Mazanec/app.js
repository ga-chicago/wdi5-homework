function turtle(name, color, weapon, attackStrength) {
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


var Donatello = new turtle('Donatello', 'purple','bo staff',4);
Donatello.catchPhrase('Uh...');

var Michelangelo  = new turtle('Michelangelo ', 'orange','nunchucks',3);
Michelangelo.catchPhrase('Bodacious');

var Leonardo = new turtle('Leonardo', 'blue','akimbo takana',2);
Leonardo.catchPhrase('Radical!');

var Raphael = new turtle('Raphael', 'red','akimbo sai',1);
Raphael.catchPhrase('Totally tubular, dude!');

console.log(Leonardo.strengthBoost(59));
console.log(Donatello.catchPhrase);
console.log(Michelangelo.color);
console.log(Leonardo.weapon);
console.log(Raphael.name);
