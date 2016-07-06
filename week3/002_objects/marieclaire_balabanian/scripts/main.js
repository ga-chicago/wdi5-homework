function Turtle(name, color, weapon) {
  this.name = name;
  this.color = color;
  this.weapon = weapon;
}


Turtle.prototype.attitude = function () {
  return raph.name + ' has got some sass!';
}

Turtle.prototype.goofPizza = function () {
  return mich.name + ' is a goof who just wants to go crazy on some pizza!';
}

Turtle.prototype.lead = function () {
  return leo.name + '"s spirituality game is on point!';
}

Turtle.prototype.nerd = function () {
  return don.name  + ' is a hunk of a nerd!';
}

var leo = new Turtle('Leonardo', 'blue', 'katana');
var don = new Turtle('Donatello', 'purple', 'bo staff');
var raph = new Turtle('Raphael', 'red', 'sai');
var mich = new Turtle('Michelangelo', 'orange', 'nunchucks');





console.log(leo);
console.log(don);
console.log(raph);
console.log(mich);
