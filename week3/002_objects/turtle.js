function Turtle (name, weapon, color) {
  this.name   = name;
  this.weapon = weapon;
  this.color  = color;
}

Turtle.prototype.fight = function() {
  if (this.name != "Leonardo") {
    return this.name + " used " + this.weapon.toLowerCase() + ".";
  }
  else {
    return this.name + " studied with Splinter.";
  }
}

Turtle.prototype.getNickname = function() {
  if (this.name === "Raphael") {
    return this.name.slice(0,4);
  }
  else {
    return this.name.slice(0,3);
  }
}

Turtle.prototype.pressConsideration = function() {
  var newDiv = document.body.createElement('div');
  newDiv.backgroundColor = this.color;
  newDiv.className = 'turtleDiv';
  newDiv.innerHTML += this.name;
  document.body.appendChild();
}


var leo = new Turtle ("Leonardo", "Sword", "#00abff");
var rap = new Turtle ("Raphael", "Sai", "indianred");
var mic = new Turtle ("Michaelangelo", "Nunchuks", "#ffa700");
var don = new Turtle ("Donatello", "Bowstaff", "#c465e5");



console.log(leo.fight());
console.log(don.fight());
console.log(leo.getNickname());
console.log(rap.getNickname());
