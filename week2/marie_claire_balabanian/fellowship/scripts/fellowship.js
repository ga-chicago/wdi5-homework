console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;


//----------------------------------PART 1


var makeMiddleEarth = function () {
  var middleEarth = document.createElement('section');
  middleEarth.id = "middle-earth";

  var shire = document.createElement('article');
  shire.id = "shire";
  middleEarth.appendChild(shire);
  shire.innerHTML = "<h1>The Shire</h1>";

  var rivendell = document.createElement('article');
  rivendell.id = "rivendell";
  middleEarth.appendChild(rivendell);
  rivendell.innerHTML = "<h1>Rivendell</h1>";
  

  var mordor = document.createElement('article');
  mordor.id = "mordor";
  middleEarth.appendChild(mordor);
  mordor.innerHTML = "<h1>Mordor</h1>";
  

  body.appendChild(middleEarth);
}
makeMiddleEarth();


//----------------------------------PART 2


var makeHobbits = function () {
  var listOfHobbits = document.createElement('ul');

  for (var i = 0; i < hobbits.length; i++) {
    var hobbitNames = document.createElement('li');
    hobbitNames.className = "hobbit";
    listOfHobbits.appendChild(hobbitNames);
    hobbitNames.innerHTML = hobbits[i];
  }
  document.getElementById('shire').appendChild(listOfHobbits);
}



//----------------------------------PART 3

var keepItSecretKeepItSafe = function () {
  var theRing = document.createElement('div');
  theRing.id = "the-ring";
  theRing.className = "magic-imbued-jewelry";
  document.getElementsByClassName('hobbit')[0].appendChild(theRing);
}



//----------------------------------PART 4

var makeBuddies = function () {
  var asideBuddies = document.createElement('aside');
  var listOfBuddies = document.createElement('ul');
  
  for (var i = 0; i < buddies.length; i++) {
    var buddiesName = document.createElement('li');
    listOfBuddies.appendChild(buddiesName);
    buddiesName.innerHTML = buddies[i];
  }
  document.getElementById('rivendell').appendChild(listOfBuddies);

}



//----------------------------------PART 5

var beautifulStranger = function () {
  document.getElementsByTagName('li')[7].innerHTML = "Aragorn";
}



//----------------------------------PART 6

var leaveTheShire = function () {
  document.getElementById('rivendell').appendChild(document.getElementsByTagName('ul')[0]);
}



//----------------------------------PART 7

var forgeTheFellowship = function () {
  var divFellowship = document.createElement('div');
  divFellowship.id = "the-fellowship";
  document.getElementById('rivendell').appendChild(divFellowship);
  
  for (var i = 0; i < 9; i++) {
    var moveToFellowship = divFellowship.appendChild(document.getElementsByTagName('li')[i]);
    var charName = document.getElementsByTagName('li')[i].innerText;
    alert(charName + " has joined your party!");
  }
}



//----------------------------------PART 8 

var theBalrog = function () {
  var gandalfWhite = document.getElementsByTagName('li')[4];
  gandalfWhite.innerHTML = "Gandalf The White";
  gandalfWhite.style.backgroundColor = "white";
  gandalfWhite.style.border = "2px solid grey";
}



//----------------------------------PART 9 

var hornOfGondor = function () {
  alert("The Horn of Gondor has been blown!");
  alert("Boromir has been killed by the Uruk-hai!");
  document.getElementById('the-fellowship').removeChild(document.getElementsByTagName('li')[5]);
}  



//----------------------------------PART 10

var itsDangerousToGoAlone = function () {
  document.getElementById('mordor').appendChild(document.getElementsByTagName('li')[2]);
  document.getElementById('mordor').appendChild(document.getElementsByTagName('li')[5]);

  var mountDoom = document.createElement('div');
  mountDoom.id = "mount-doom";
  document.getElementById('mordor').appendChild(mountDoom);
}



//----------------------------------PART 11

var weWantsIt = function () {
  var gollum = document.createElement('div');
  gollum.id = "gollum";
  document.getElementById('mordor').appendChild(gollum);

  document.getElementById('gollum').appendChild(document.getElementById('the-ring'));
  document.getElementById('mount-doom').appendChild(document.getElementById('gollum'));
}



//----------------------------------PART 12

var thereAndBackAgain = function () {
  document.getElementById('mount-doom').removeChild(document.getElementById('gollum'));

  for (var i = 0; i < 4; i++) {
  document.getElementById('shire').appendChild(document.getElementsByClassName('hobbit')[i]);  
  }
}












