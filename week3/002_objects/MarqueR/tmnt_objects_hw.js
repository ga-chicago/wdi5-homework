

// CREATE NINJA TURTLE OBJECT //
///////////////////////////////

function Tmnt (name, nickname, color, weapon) {
  this.name = name;
  this.nickname = nickname;
  this.color = color;
  this.weapon = weapon;
};


// LET THERE BE PIZZA!!! //
///////////////////////////

Tmnt.prototype.eatPizza = function(slices) {
  return this.nickname + " just ate " + slices + " slices of pizza, dude! Whoooooooaaaaaa!"
};


// DO SOME RIGHTEOUS TURTLE BATTLE ACTION //
////////////////////////////////////////////

Tmnt.prototype.beatDownTheFoot = function(theFoot) {
  return this.name + " just beat down " + theFoot + " members of The Foot Clan! Cowabunga!";
};


// LOOK OUT, SPLINTER'S LAYING DOWN THE LAW! //
///////////////////////////////////////////////

Tmnt.prototype.inTrouble = function(uhOh) {
  return "Splinter's not happy! " + this.nickname + " left the sewer door open! So NOT bodacious, dude...";
};


// HYPOTHETICAL, PHILOSOPHICAL, RADICAL //
//////////////////////////////////////////

Tmnt.prototype.philosophical = function(whatIf) {
  return "...What if..." + this.name + " didn't wear " + this.color + ", and didn't wield " + this.weapon + "? Isn't that craaazyyyyy?";
};


// CREATE THE TURTLES //
////////////////////////

var Michelangelo = new Tmnt('Michelangelo', 'Mikey', 'orange', 'nunchaku');
var Leonardo = new Tmnt('Leonardo', 'Leo', 'blue', 'katana');
var Donatello = new Tmnt('Donatello', 'Donnie', 'purple', 'bo staff');
var Raphael = new Tmnt('Raphael', 'Raph', 'Red', 'sai');


// TESTING IT ALL OUT... //
///////////////////////////

console.log("\n");
console.log(Leonardo.philosophical());
console.log(Michelangelo.beatDownTheFoot(5));
console.log(Raphael.eatPizza(3));
console.log(Donatello.inTrouble());
