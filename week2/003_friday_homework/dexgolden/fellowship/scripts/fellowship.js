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
