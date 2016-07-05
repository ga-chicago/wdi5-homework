function ninjaTurtle (name, bandanaColor, weapon, food) {
  this.name          = name;
  this.bandanaColor  = bandanaColor;
  this.weapon        = weapon;
  this.food          = food;
}

ninjaTurtle.prototype.greet = function () {
  return 'Whats up dude? My name is ' + this.name;
};

ninjaTurtle.prototype.getDressed = function () {
  return (this.bandanaColor);
}


ninjaTurtle.prototype.eat = function (food){
  (this.food = this.food + 1);
  return (this.name + ' has eaten ' + this.food + ' pieces of pizza')
}

ninjaTurtle.prototype.equipWeapon = function (){
  return (this.name + ' has equipped his ' + this.weapon)
}


var Donatello     = new ninjaTurtle('Donatello', 'purple', 'bo staff', 0);
var Leonardo      = new ninjaTurtle('Leonardo', 'red', 'katana', 0);
var Michaelangelo = new ninjaTurtle('Michaelangelo', 'orange', 'nunchucks', 0);
var Raphael       = new ninjaTurtle('Raphael', 'dark red', 'sai', 0); 


console.log(Donatello)
console.log(Leonardo)
console.log(Michaelangelo)
console.log(Raphael)
Donatello.getDressed()
Leonardo.getDressed()
console.log(Raphael.getDressed())
Michaelangelo.getDressed()
Donatello.eat(1)
Leonardo.eat(1)
Raphael.eat(1)
Michaelangelo.eat(8)
console.log(Donatello.equipWeapon())
Leonardo.equipWeapon()

