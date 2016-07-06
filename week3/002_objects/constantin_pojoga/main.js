// Your job is to create the Ninja Turtles using just one JavaScript object. You'll use what you learned about object prototypes and the `new` keyword to do this.

// In the end you should have 4 different turtle objects stored within variables, each having their own set of properties and methods.

// ## Required properties:

// - Color
// - Weapon
// - Name

// ## Required methods:

// - Be creative. Make something up

var NinjaTurtle  = function(name, color, weapon, character) {
  this.name      = name;
  this.color     = color;
  this.weapon    = weapon;
  this.character = character || "";
}

var donnie = new NinjaTurtle("Donatello", "purple", "bo staff"), 
    leo    = new NinjaTurtle("Leonardo", "blue", "katana"), 
    mikey  = new NinjaTurtle("Michelangelo", "orange", "nunchucks"), 
    raph   = new NinjaTurtle("Raphael", "red", "sai");

NinjaTurtle.prototype.talk = function() {
  console.log("I'm " + this.name + ", is wearing a " + this.color + " mask, and love to fight with " + this.weapon + ".");
}

NinjaTurtle.prototype.makeCharacter = function(chr) {
  this.character = chr;
}

NinjaTurtle.prototype.about = function() {
  if (this.character) { 
    console.log(this.name + " - " + this.character + ".")
  } else {
    console.log(this.name + " - new character, to be discovered.")
  }
}
donnie.talk();
leo.talk();
mikey.talk();
raph.talk();
// donnie.character is ""
donnie.about();

donnie.makeCharacter("The scientist, inventor, engineer, and technological geniusis perhaps the least violent turtle, preferring to use his knowledge to solve conflicts");
leo.makeCharacter("The tactical, courageous leader and devoted student of his sensei");
mikey.makeCharacter("The most stereotypical teenager of the team,  is a free-spirited, relaxed, and often goofy jokester and known for his love of pizza");
raph.makeCharacter("The team's bad boy. He is physically very strong, has an aggressive nature, and seldom hesitates to throw the first punch");
// donnie is defined
donnie.about();
leo.about();
mikey.about();
raph.about();


