//THIS PAGE WILL SHOW HOW TO MAKE A BUNCH OF DIFFERENT VARIABLES 
//WITHOUT HAVING TO MAKE MULTIPLE LITERAL OBJECTS

console.log('Hello, this is working')

//for constructors make sure to CAPITALIZE THE FIRST LETTER

function NinjaTurtle(color, weapon, name, health) {
  this.color       = color;
  this.weapon      = weapon;
  this.name        = name;
  this.health      = health;
}

NinjaTurtle.prototype.talk = function() {
  return 'Hello my name is ' + this.name
};

NinjaTurtle.prototype.getHit = function(attack) {
  return this.health = this.health - attack;
};

NinjaTurtle.prototype.gainHealth = function(healthierBy) {
  return this.health = this.health + healthierBy;
};

NinjaTurtle.prototype.assemble = function() {
  return 'The Ninja Turtles have assembled! Prepare for battle!'
};


var turtle1 = new NinjaTurtle ('orange', 'nunchucks', 'Michaelangelo', 80);

var turtle2 = new NinjaTurtle ('blue', 'katana', 'Leonardo', 75);

var turtle3 = new NinjaTurtle ('red', 'sais', 'Raphael', 85);

var turtle4 = new NinjaTurtle ('purple', 'bo staff', 'Donatello', 82);


console.log(turtle1.name, turtle1.weapon, turtle1.color, turtle1.health);

console.log(turtle2.name, turtle2.weapon, turtle2.color, turtle2.health);

console.log(turtle3.name, turtle3.weapon, turtle3.color, turtle3.health);

console.log(turtle4.name, turtle4.weapon, turtle4.color, turtle4.health);


turtle2.gainHealth(9);

console.log(turtle2.health);

turtle3.getHit(6);

console.log(turtle3.health);



