var body = document.body;

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

Turtle.prototype.createDiv = function() {
  var newDiv = document.createElement('div');
  var place = document.getElementById('stuffGoesHere');
  newDiv.style.backgroundColor = this.color;
  newDiv.className = 'turtleDiv';
  newDiv.innerHTML += this.getNickname();
  
  place.appendChild(newDiv);
}

var leo = new Turtle ("Leonardo", "Sword", "#00abff");
var rap = new Turtle ("Raphael", "Sai", "#ff2d2d");
var mic = new Turtle ("Michaelangelo", "Nunchuks", "#ffa700");
var don = new Turtle ("Donatello", "Bowstaff", "#c465e5");

var leoButton = document.querySelector('button[name="Leonardo"]');
var rapButton = document.querySelector('button[name="Raphael"]');
var micButton = document.querySelector('button[name="Michaelangelo"]');
var donButton = document.querySelector('button[name="Donatello"]');

//select containing div? 
leoButton.addEventListener('click', function(){
  leo.createDiv();
})
rapButton.addEventListener('click', function(){
  rap.createDiv();
})
micButton.addEventListener('click', function(){
  mic.createDiv();
})
donButton.addEventListener('click', function(){
  don.createDiv();
})









// leo.pressConsideration();
// don.pressConsideration();
// mic.pressConsideration();
// rap.pressConsideration();

