<<<<<<< HEAD
console.log("Linked.");

// Dramatis Personae
=======
<<<<<<< HEAD


console.log("Linked.");

// Dramatis Personae
////////////////////

=======
console.log("Linked.");

// Dramatis Personae
>>>>>>> e34d41686e3eed0003ae81b29675383e8f0bb08a
>>>>>>> 336b874f5209f86b1367cd705feac0774216835a
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
<<<<<<< HEAD
=======
<<<<<<< HEAD




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



























=======
>>>>>>> 336b874f5209f86b1367cd705feac0774216835a
///////DEX STARTS HERE
//// PART 1: The Journey Begins
//////////

var makeMiddleEarth = function(){
  var middleEarth = document.createElement('section');
  middleEarth.id ="middle-earth";
  var shire = document.createElement('article');
  shire.id = "Shire";
  var rivendell = document.createElement('article');
  rivendell.id = "Rivendell"
  var mordor = document.createElement('article');
  mordor.id = "Mordor";

  middleEarth.appendChild(shire);
  middleEarth.appendChild(rivendell);
  middleEarth.appendChild(mordor);

  shire.innerHTML ="<h1>The Shire</h1>";
  rivendell.innerHTML ="<h1>Rivendell</h1>";
  mordor.innerHTML ="<h1>Mordor</h1>";

  body.appendChild(middleEarth);
}

////////////////////
//   PART 2
////////////////////

var makeHobbits = function() {
  var hobbitList = document.createElement('ul');

  for(var i = 0; i <hobbits.length; i++){
    var hobbitListItem = document.createElement('li'); 
    hobbitListItem.className="hobbit"; 
    hobbitList.appendChild(hobbitListItem);
    hobbitListItem.innerHTML = hobbits[i];

  }
  document.getElementById('Shire').appendChild(hobbitList);
}

////////////////
//  Part 3
////////////////////////////

var keepItSecretKeepItSafe = function () {
  var ring = document.createElement('div');
  ring.id = 'the-ring';
  ring.className = 'magic-imbued-jewelry';
  document.getElementsByClassName('hobbit')[0].appendChild(ring);
};

//////////////////////
// PART 4
//////////////////////////
var makeBuddies = function () {
  var asideVar = document.createElement('aside');
  var buddiesList = document.createElement('ul');
  for(var j = 0; j < buddies.length; j++){
    var buddiesListItem = document.createElement('li'); 
    buddiesList.appendChild(buddiesListItem);
    buddiesListItem.innerHTML = buddies[j];
  }
   asideVar.appendChild(buddiesList);
   document.getElementById('Rivendell').appendChild(asideVar);   
};
//////////////////////
// PART 5
//////////////////////////
var beautifulStranger = function () {   
  document.getElementsByTagName("li")[7].innerHTML = "Aragorn"; //8th list item [index 7] created.
};
//////////////////////
// PART 6
//////////////////////////
var leaveTheShire = function () {   
  for(var h = 0; h < 4; h++){
    document.getElementsByTagName('ul')[1].appendChild(document.getElementsByClassName('hobbit')[0]);  //As each item moves, the others shift into place, requiring index[0] to be moved 4X.
  };
};
//////////////////////
// PART 7
//////////////////////////
var forgeTheFellowShip = function () {  
  var fellowshipVar = document.createElement('div'); //Create Fellowship. instructions aren't clear on what needs tp be named
  fellowshipVar.id = 'the-fellowship';          // so I went with ID
  fellowshipVar.innerHTML='the-fellowship';
  document.getElementById('Rivendell').appendChild(fellowshipVar);

  for(var f = 0; f < 9; f++){
    //alert(document.getElementsByTagName("li")[0].textContent + " has joined the The Fellowship"); // must use "textContent", otherwise (without ut or using innerHTML), result in message instead of char name
     document.getElementById('the-fellowship').appendChild(document.getElementsByTagName("li")[0]);    
  };
};
//////////////////////
// PART 8
//////////////////////////
var theBalrog = function () {
  document.getElementsByTagName("li")[0].textContent= "Gandalf the White";
  document.getElementsByTagName("li")[0].style.backgroundColor = "white";
  document.getElementsByTagName("li")[0].style.border = "thick solid grey";
};
//////////////////////
// PART 9
//////////////////////////
var hornOfGondor = function () {
  alert("The horn of gondor has been blown!! Boromir's been killed by the Uruk-hai!");  
  document.getElementById("the-fellowship").removeChild(document.getElementsByTagName("li")[4]);
};
//////////////////////
// PART 10
//////////////////////////
var itsDangerousToGoAlone = function (){
  document.getElementById('Mordor').appendChild(document.getElementsByTagName("li")[4]);
  document.getElementById('Mordor').appendChild(document.getElementsByTagName("li")[4]);
  var mountDoom = document.createElement('div');
  mountDoom.id='mount-doom';
  document.getElementById('Mordor').appendChild(mountDoom);
};
//////////////////////
// PART 11
//////////////////////////
 var weWantsIt = function () {
   var gollum = document.createElement('div');
   gollum.id='gollum';
   gollum.innerHTML='Gollum';
   document.getElementById('Mordor').appendChild(gollum);
   gollum.appendChild(document.getElementById('the-ring'));
   document.getElementById('mount-doom').appendChild(gollum);
};
//////////////////////
// PART 12
//////////////////////////
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   document.getElementById('mount-doom').removeChild(document.getElementById('gollum'));
   for(var sh = 0; sh < 4; sh++){
    document.getElementById('Shire').appendChild(document.getElementsByClassName('hobbit')[sh]);
  };   
};
<<<<<<< HEAD
=======
>>>>>>> e34d41686e3eed0003ae81b29675383e8f0bb08a
>>>>>>> 336b874f5209f86b1367cd705feac0774216835a
