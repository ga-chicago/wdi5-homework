function Turtle(nameArg, colorArg, weaponArg){
  this.name = nameArg;
  this.color = colorArg;
  this.weapon = weaponArg;
}

Turtle.prototype.intro = function() {
  console.log( "My name's " + this.name + ". I wear " + this.color + " and kick shell with my " +this.weapon);
};
Turtle.prototype.call = function() {
  var sayings = ["Cowabunga!", "Let's get pizza!", "April's in trouble"];
  var callOut  = sayings[Math.round(Math.random() * 2)];
  console.log(callOut);
};

var turt1 = new Turtle("Leonardo", "blue", "sword");
turt1.intro();
turt1.call();
console.log("\n");

var turt2 = new Turtle('Michaelangelo', 'orange', 'nunchucks');
turt2.intro();
turt2.call();
console.log("\n");

var turt3 = new Turtle('Donnatelo', 'purple', 'bow-staff');
turt3.intro();
turt3.call();
console.log("\n");

var turt4 = new Turtle('Raphael', 'red', 'sais');
turt4.intro();
turt4.call();


