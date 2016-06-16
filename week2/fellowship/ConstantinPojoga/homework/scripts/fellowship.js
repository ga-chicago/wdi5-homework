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
// PART 1
 var makeMiddleEarth = function () {
    // ************* Create a Section ****************
    var newSection = document.createElement("section");
        newSection.setAttribute('id','middle-earth');
    document.body.appendChild(newSection);
   // ******* article id theShire ***************
    var article1 = document.createElement("article");
        article1.setAttribute('id', 'theShire');
        newSection.appendChild(article1);
    var h1Shire = document.createElement('h1');
        h1Shire.innerText = lands[0];
        article1.appendChild(h1Shire);
    // ********* article id riverdell
    var article2 = document.createElement("article");
        article2.setAttribute('id', 'rivendell');
        newSection.appendChild(article2);
    var h1Rivendell = document.createElement('h1');
        h1Rivendell.innerText = lands[1];
        article2.appendChild(h1Rivendell);
    // article id mordor
    var article3 = document.createElement("article");
        article3.setAttribute('id', 'mordor');
        newSection.appendChild(article3);
    var h1Mordor = document.createElement('h1');
        h1Mordor.innerText = lands[2];
        article3.appendChild(h1Mordor);
 };
 makeMiddleEarth();

// PART 2
var makeHobbits = function () {
  var ulHobbit= document.createElement('ul');
      ulHobbit.setAttribute('id', 'hobbits')
      document.body.appendChild(ulHobbit);
  var frodo = document.createElement('li');  
      frodo.setAttribute('id', 'frodo')
      frodo.innerText = hobbits[0];
      frodo.setAttribute('class', 'hobbit');
      ulHobbit.appendChild(frodo);
  var samwise = document.createElement('li');
      samwise.setAttribute('id', 'samwise')
      samwise.innerText = hobbits[1];
      samwise.setAttribute('class', 'hobbit');

      ulHobbit.appendChild(samwise);
  var meriadoc = document.createElement('li');
      meriadoc.setAttribute('id', 'meriadoc')
      meriadoc.setAttribute('class', 'hobbit');
      meriadoc.innerText = hobbits[2];
      ulHobbit.appendChild(meriadoc);
  var peregrin = document.createElement('li');
      peregrin.setAttribute('id', 'peregrin')
      peregrin.setAttribute('class', 'hobbit');
      peregrin.innerText = hobbits[3];
      ulHobbit.appendChild(peregrin);
  };
  makeHobbits();
  // PART 3
  var keepItSecretKeepItSafe = function () {
  var theRing = document.createElement('div');
      theRing.setAttribute('id', 'the-ring')
      theRing.setAttribute('class', 'magic-imbued-jewelry')
  var frodo = document.getElementById('frodo')
    frodo.appendChild(theRing);
};
keepItSecretKeepItSafe();

// PART 4
var makeBuddies = function () {
  var aside = document.createElement('aside');
  var buddy = document.createElement('ul');
      buddy.setAttribute('id', 'buddies');
      //'Gandalf the Grey',
  var gandalf = document.createElement('li');
      gandalf.innerText = buddies[0];
      gandalf.setAttribute('id', 'gandalf');
      buddy.appendChild(gandalf);
        // 'Legolas', 
      var legolas = document.createElement('li');
      legolas.setAttribute('id', 'legolas');
      legolas.innerText = buddies[1];
      buddy.appendChild(legolas);
      // 'Gimli', 
      var gimli = document.createElement('li');
      gimli.setAttribute('id', 'gimli');
      gimli.innerText = buddies[2];
      buddy.appendChild(gimli);
      // 'Strider', 
      var strider = document.createElement('li');
      strider.setAttribute('id', 'strider');
      strider.innerText = buddies[3];
      buddy.appendChild(strider);
      // 'Boromir'
      var boromir = document.createElement('li');
      boromir.setAttribute('id', 'boromir');
      boromir.innerText = buddies[4];
      buddy.appendChild(boromir);
     
      aside.appendChild(buddy);
  var rivendell = document.getElementById('rivendell');
      rivendell.appendChild(aside);
};
makeBuddies();

// PART 5
var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
  var aragorn = document.getElementById('strider');
      aragorn.innerText = "Aragorn";
};
beautifulStranger();

// PART 6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   var hobbit = document.getElementById("hobbits");
   rivendell.appendChild(hobbit);
};
leaveTheShire();

// PART 7
var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   var theFellowship = document.createElement('div');
       theFellowship.setAttribute('id', 'the-fellowship');
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'
   var hobbit = document.getElementById("hobbits");
   theFellowship.appendChild(hobbit);
   var buddies = document.getElementById('buddies');
   theFellowship.appendChild(buddies);
   rivendell.appendChild(theFellowship);
   // after each character is added make an alert that they // have joined your party
//alert('they have joined to my party!')
};
forgeTheFellowShip();

// PART 8
var theBalrog = function () {
     // change the `'Gandalf'` text to `'Gandalf the White'`
  var gandalf = document.getElementById('gandalf');
     gandalf.innerText = 'Gandalf the White';
        // apply the following style to the element, make the // background 'white', add a grey border
     gandalf.style.background = "white";
     gandalf.style.border = "1px solid grey"
};
theBalrog();

// Part 9
var hornOfGondor = function () {
     // pop up an alert that the horn of gondor has been blown
  //alert('The horn of gondor has been blown');
     // Boromir's been killed by the Uruk-hai!
     // Remove `Boromir` from the Fellowship
  var parent = document.getElementById("buddies");
  var child = document.getElementById("boromir");
  parent.removeChild(child);
};
hornOfGondor();

// Part 10
var itsDangerousToGoAlone = function (){
  var mordor = document.getElementById('mordor');
  var mordorUl = document.createElement('ul');
      mordorUl.setAttribute('id', 'mordorUl');
         // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  var frodo  = document.getElementById('frodo');
      mordorUl.appendChild(frodo);
  var sam  = document.getElementById('samwise');
      mordorUl.appendChild(sam);
      mordor.appendChild(mordorUl);
      // add a div with an id of `'mount-doom'` to `Mordor`
  var mountDoom = document.createElement('div');
      mountDoom.setAttribute('id', 'mount-doom');
      mordor.appendChild(mountDoom);
};
itsDangerousToGoAlone();

// Part 11
var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
  var gollum = document.createElement('div');
      gollum.setAttribute('id', 'gollum');
  var mordor = document.getElementById('mordor');
      mordor.appendChild(gollum);
   // Remove `the ring` from `Frodo` and give it to `Gollum`
  var ring = document.getElementById('the-ring'); 
      gollum.appendChild(ring);
   // Move Gollum into Mount Doom
  var mountDoom = document.getElementById('mount-doom')
      mountDoom.appendChild(gollum);
};
weWantsIt();

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
  var parent = document.getElementById("mount-doom");
  var child = document.getElementById("gollum");
      parent.removeChild(child);
   // Move all the `hobbits` back to `the shire`
  var shire = document.getElementById('theShire');
  var hobbit = document.getElementById('hobbits');
      shire.appendChild(hobbit);
  var frodo = document.getElementById('frodo');
      hobbit.appendChild(frodo);
  var sam = document.getElementById('samwise');
      hobbit.appendChild(sam);
};
thereAndBackAgain();




























