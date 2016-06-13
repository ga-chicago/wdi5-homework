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

// Leah Start's Here/////

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
    var createMiddleEarth = document.createElement('section');
    createMiddleEarth.id = "middle-earth";
    // add each land as an `article` tag
    var theShire = document.createElement('article');
    theShire.id = "theShire";
    var Rivendell = document.createElement('article');
    Rivendell.id = "rivendell";
    var Mordor = document.createElement('article');
    Mordor.id = "Mordor";
    // inside each `article` tag include an `h1` with the name of the land
    theShire.innerHTML = "<h1> The Shire </h1>"
    Rivendell.innerHTML = "<h1> Rivendell </h1>"
    Mordor.innerHTML = "<h1> Mordor </h1>"

    // append `middle-earth` to your document `body`
    
    body.appendChild(createMiddleEarth);
    createMiddleEarth.appendChild(theShire);
    createMiddleEarth.appendChild(Rivendell);
    createMiddleEarth.appendChild(Mordor);

    // console.log(createMiddleEarth);
    // console.log(theShire);
    console.log(Rivendell);
    // console.log(Mordor);   
   
};

makeMiddleEarth();

// var shire = document.getElementById(theShire);

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
      var addHobbits = document.createElement('ul');
      
      for (var i = 0; i < hobbits.length; i++) {
        var listHobbits = document.createElement('li');
           // give each hobbit a class of `hobbit`
        listHobbits.className = "hobbit";
        addHobbits.appendChild(listHobbits);
        listHobbits.innerHTML = hobbits[i];
      };
      
    
       // console.log(addHobbits);
      
      document.getElementById('theShire').appendChild(addHobbits);
      


};
makeHobbits();

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   var safe = document.createElement('div');
   safe.id = "the-ring";
   safe.className = "magic-imbued-jewelry"
   document.getElementsByClassName('hobbit')[0].appendChild(safe);

   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};
keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   var buddiesAside = document.createElement('aside');
   var addBuddies = document.createElement('ul');
   buddiesAside.appendChild(addBuddies);

   // attach an `unordered list` of the `'buddies'` in the aside
   for (var i = 0; i < buddies.length; i++){
    var listBuddies = document.createElement('li');
    addBuddies.appendChild(listBuddies);
    listBuddies.innerHTML = buddies[i]; 

    
   };
   // console.log(buddies);
   // console.log(buddiesAside);
   document.getElementById('rivendell').appendChild(buddiesAside);
   // insert your aside as a child element of `rivendell`
};
 makeBuddies();

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   document.getElementById('rivendell').getElementsByTagName("li")[3].innerHTML = "Aragorn";
};
// console.log(beautifulStranger);
beautifulStranger();

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
    var getRivendell = document.getElementById('rivendell')
      // console.log(getRivendell);
    var getHobbits = document.getElementsByClassName('hobbit');
   // document.getElementById('rivendell').appendChild(getHobbits);
    // console.log(getHobbits);
   //  This doesn't work at all nested get's??  document.getElementById('rivendell').appendChild(document.getElementsByClassName('hobbit'));
   // getRivendell.appendChild(getHobbits);

};

leaveTheShire();
//  Leave the Shire is a fail not sure the best way to access the hobbits

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   var makeFellowship = document.createElement('div');
   makeFellowship.id = "the-fellowship";
   document.getElementById('rivendell').appendChild(makeFellowship);
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   for (var i = 0; i < buddies.length; i++){
    var listBuddies = document.createElement('li');
    makeFellowship.appendChild(listBuddies);
    listBuddies.innerHTML = buddies[i]; 
    alert( buddies[i] + ' has joined your party');
  };
  for (var i = 0; i < hobbits.length; i++) {
        var listHobbits = document.createElement('li');
        makeFellowship.appendChild(listHobbits);
        listHobbits.innerHTML = hobbits[i];
        alert( hobbits[i] + ' has joined your party');
      };

};

//  adds each hobbit anf buddie but now has 2 of each on the page.. research write function to remove from the shire as they are added.

// forgeTheFellowShip();

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
    var getGandalf = document.getElementById('rivendell').getElementsByTagName("li")[0];
    getGandalf.innerHTML = "Gandalf the White";
    getGandalf.style.background = 'white';
    getGandalf.style.border = '2px solid grey';
   // apply the following style to the element, make the // background 'white', add a grey border
};
theBalrog();
