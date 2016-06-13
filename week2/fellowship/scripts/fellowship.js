

console.log("Linked.");

// Dramatis Personae
////////////////////

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




// MAKE MIDDLE EARTH
////////////////////

var makeMiddleEarth = function()  {
  var section = document.createElement('section');
  section.id = 'Middle-Earth';

  for (i = 0; i < lands.length; i++) {
    var article = document.createElement('article');
    var articleName = document.createElement('h1');
    articleName.innerHTML = lands[i];
    article.id = lands[i];
    article.appendChild(articleName);
    section.appendChild(article);
  }

  body.appendChild(section);

}

makeMiddleEarth();




// PUT ALL THE HOBBITS IN THE SHIRE
///////////////////////////////////

var makeHobbits = function() {
  var hobbitsList = document.createElement('ul');
  hobbitsList.id = 'hobbitsList';
  var shire = document.getElementById('The Shire');  

  for (i = 0; i < hobbits.length; i++) {
    var newHobbit = document.createElement('li');
    newHobbit.innerHTML = hobbits[i];
    newHobbit.id = hobbits[i];
    hobbitsList.appendChild(newHobbit);
  }

  shire.appendChild(hobbitsList);

}

makeHobbits();




// MAKE THE RING AND GIVE IT TO FRODO
/////////////////////////////////////

var keepItSecretKeepItSafe = function() {
  var frodoSearch = document.getElementsByTagName('li');
  var theRing = document.createElement('div');
  theRing.id = 'the-ring';
  theRing.className = 'magic-imbued-jewelry';

  for (i = 0; i < frodoSearch.length; i++) {
    if (frodoSearch[i].textContent === 'Frodo Baggins') {;
      var frodo = frodoSearch[i];
      break;
    }
  }

  frodo.appendChild(theRing);

}

keepItSecretKeepItSafe();




// MAKE ALL THE HOBBITS' BUDDIES AND PUT THEM IN RIVENDELL
//////////////////////////////////////////////////////////

var makeBuddies = function() {
  var buddiesAside = document.createElement('aside');
  var buddiesList = document.createElement('ul');
  buddiesList.id = 'buddiesList'; 
  var rivendell = document.getElementById('Rivendell');

  for (i = 0; i < buddies.length; i++) {
    var newBuddy = document.createElement('li');
    newBuddy.innerHTML = buddies[i];
    newBuddy.id = buddies[i];
    buddiesList.appendChild(newBuddy);
  }

  buddiesAside.appendChild(buddiesList);
  rivendell.appendChild(buddiesList);

}

makeBuddies();




// GIVE ARAGORN HIS PROPER NAME
///////////////////////////////

var beautifulStranger = function() {
  var aragorn = document.getElementById('Strider')
  aragorn.innerHTML = 'Aragorn';
  aragorn.id = 'Aragorn';
}

beautifulStranger();




// THE HOBBITS LEAVE THE SHIRE
//////////////////////////////

var leaveTheShire = function() {
  var leaving = document.getElementById('hobbitsList')
  var goingToRivendell = document.getElementById('Rivendell')
 
  document.getElementById('Rivendell').appendChild(leaving);
}

leaveTheShire();




// THE FELLOWSHIP IS FORMED
///////////////////////////

var forgeTheFellowShip = function() {
  var theFellowship = document.createElement('div');
  theFellowship.id = 'theFellowship';
  var fellowship = document.createElement('ul');
  fellowship.id = 'fellowship';
  var fellows = document.getElementsByTagName('li');
  
  // while (hobbitsList.childNodes.length > 0) {
  //   var hobbit = hobbitsList.firstChild;
  //   fellowship.appendChild(hobbit);
  // }

  // while (buddiesList.childNodes.length > 0) {
  //   var buddy = buddiesList.firstChild;
  //   fellowship.appendChild(buddy);
  // }

  while (fellows.length > 0) {          //NOTE: This leaves empty hobbitsList and buddiesList ul's in Rivendell article!!!
    var person = fellows[0];
    fellowship.appendChild(person);
    // alert(person.textContent + " has joined the fellowship");
  }
    
  document.getElementById('Rivendell').appendChild(theFellowship);
  theFellowship.appendChild(fellowship);


}

forgeTheFellowShip();




// Gandalf is transformed
/////////////////////////

var theBalrog = function() {
  var gandalf = document.getElementById('Gandalf the Grey')
  gandalf.innerHTML = 'Gandalf the White';
  gandalf.id = 'Gandalf the White';
}

theBalrog();




// Poor, poor Boromir...
////////////////////////

var hornOfGondor = function() {
  // alert("The horn of Gondor has been blown!");
  // alert("Boromir has been killed by the Uruk-hai.");
  var fellowshipMinusOne = document.getElementById('fellowship');
  var boromir = document.getElementById('Boromir');
  fellowship.removeChild(boromir);
}

hornOfGondor();




// Frodo and Sam strike out alone
/////////////////////////////////

var itsDangerousToGoAlone = function() {
  var mordor = document.getElementById('Mordor');
  var mountDoom = document.createElement('div');
  mountDoom.id = 'mountDoom';
  mordor.appendChild(mountDoom);
  mountDoom.appendChild(document.getElementById('Frodo Baggins'));
  mountDoom.appendChild(document.getElementById('Samwise \'Sam\' Gamgee'));
}

itsDangerousToGoAlone();




// Gollum gets the ring
///////////////////////

var weWantsIt = function() {
  var gollum = document.createElement('div');
  gollum.id = 'gollum';
  gollum.appendChild(document.getElementById('the-ring'));
  document.getElementById('mountDoom').appendChild(gollum);
}

weWantsIt();




// Our story comes to a close
/////////////////////////////

var thereAndBackAgain = function() {
  document.getElementById('mountDoom').removeChild(document.getElementById('gollum'));
  document.getElementById('The Shire').appendChild(document.getElementById('hobbitsList'));
  document.getElementById('hobbitsList').appendChild(document.getElementById('Frodo Baggins'));
  document.getElementById('hobbitsList').appendChild(document.getElementById('Samwise \'Sam\' Gamgee'));
  document.getElementById('hobbitsList').appendChild(document.getElementById('Meriadoc \'Merry\' Brandybuck'));
  document.getElementById('hobbitsList').appendChild(document.getElementById('Peregrin \'Pippin\' Took'));
}

thereAndBackAgain();



























