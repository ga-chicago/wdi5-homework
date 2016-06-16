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

// Part 1

//js
var makeMiddleEarth = function () {

    var middleEarth = document.createElement('section');
        middleEarth.setAttribute("id", "middleEarth");

    var shire = document.createElement('article');
        shire.setAttribute("id", "shire");
    var shireH1 =  document.createElement('h1');
        shireH1.setAttribute("id", "shireH1");
    var shireText = document.createTextNode(lands[0]); 
    
    var rivendell = document.createElement('article');
        rivendell.setAttribute("id", "rivendell");
    var rivendellH1 =  document.createElement('h1');
        rivendellH1.setAttribute("id", "rivendellH1");
    var rivendellText = document.createTextNode(lands[1]);
    
    var mordor = document.createElement('article');
        mordor.setAttribute("id", "mordor");
    var mordorH1 =  document.createElement('h1');
        mordorH1.setAttribute("id", "mordorH1");
    var mordorText = document.createTextNode(lands[2]);

    shireH1.appendChild(shireText);
    rivendellH1.appendChild(rivendellText);
    mordorH1.appendChild(mordorText);

    shire.appendChild(shireH1);
    rivendell.appendChild(rivendellH1);
    mordor.appendChild(mordorH1);

    middleEarth.appendChild(shire);
    middleEarth.appendChild(rivendell);
    middleEarth.appendChild(mordor);

    document.body.appendChild(middleEarth);
    
};

makeMiddleEarth();

// Part 2
// js
var makeHobbits = function () {

    var shireHobbits = document.createElement('ul');
    shireHobbits.setAttribute('id','shireHobbits');

    hobbits.forEach(function(val,ind){

        sH = document.createElement('li');
        sH.setAttribute("class", "hobbit");

        if(ind===0) {
            sH.setAttribute("id", "Frodo");
        };

        var hobbitX = document.createTextNode(val);
        sH.appendChild(hobbitX);
        shireHobbits.appendChild(sH);
    })
    
    shire = document.getElementById('shire');
    shire.appendChild(shireHobbits);


   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
}

makeHobbits();

// Part 3
//js
var keepItSecretKeepItSafe = function () {
    ringDiv = document.createElement('div');
    ringDiv.setAttribute('class','magic-imbued-jewelry');
    Frodo = document.getElementById('Frodo');
    Frodo.appendChild(ringDiv);
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};

keepItSecretKeepItSafe();


//Part 4

//js
var makeBuddies = function () {
    var asideTag = document.createElement('aside');
    asideTag.setAttribute('id', 'asideTag')
    var buddiesUl = document.createElement('ul');
    buddiesUl.setAttribute('id', 'buddiesUl')
    buddies.forEach(function(val,ind){

        buds = document.createElement('li');
        buds.setAttribute('class','buds')

        if(ind===3) {
            buds.setAttribute("id", "Strider");
        };

        var budX = document.createTextNode(val);
        buds.appendChild(budX);

        buddiesUl.appendChild(buds);


    })
    
    asideTag.appendChild(buddiesUl);
    rivendell = document.getElementById('rivendell');
    rivendell.appendChild(asideTag);
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
};

makeBuddies();

// Part 5

//js
var beautifulStranger = function () {
        Aragorn = document.getElementById('Strider');
        buddies[3] = 'Aragorn';
        Strider.innerHTML = "";
        Aragorn = document.createTextNode('Aragorn');
        Strider.appendChild(Aragorn);
   // change the `'Strider'` text to `'Aragorn'`
};

beautifulStranger();

// Part 6
//js

var leaveTheShire = function () {
    rivendell.appendChild(shireHobbits);
   // assemble the `hobbits` and move them to `rivendell`
};

leaveTheShire();

// Part 7

//js
var forgeTheFellowShip = function () {
    var theFellowShip = document.createElement('div');
    theFellowShip.setAttribute('id','theFellowShip');
    rivendell.appendChild(theFellowShip);


    hobbits.forEach(function(val,ind){
        fellow1 = document.getElementsByClassName('hobbit')[0];
        theFellowShip.appendChild(fellow1);
        console.log(val+' has joined the fellowship');

    });

    buddies.forEach(function(val,ind){

        fellow2 = document.getElementsByClassName('buds')[0];
        theFellowShip.appendChild(fellow2);
        console.log(val+' has joined the fellowship');

    })


   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};

forgeTheFellowShip();


// Part 8

//js
var theBalrog = function () {
    var fellow = document.getElementsByClassName('buds')[0];
    console.log(fellow);
    fellow.innerHTML = "";
    fellow.style.background = 'white';
    fellow.style.border = "thick solid gray";
    var fell = document.createTextNode('Gandoff the White');
    fellow.appendChild(fell);
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};

theBalrog();


// Part 9
//js
var hornOfGondor = function () {
    alert('The horn of Gondor has been sounded');
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   var fellow =document.getElementsByClassName('buds');
   theFellowShip.removeChild(fellow[4]);
   // Remove `Boromir` from the Fellowship
};


hornOfGondor();


// Part 10
//js
var itsDangerousToGoAlone = function (){
    frod = document.getElementById('Frodo');
    mordor.appendChild(frod);
    sam = document.getElementsByClassName('hobbit')[0];
    mordor.appendChild(sam);
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   mountDoom = document.createElement('div');
   mountDoom.setAttribute('id','mountDoom')
   mordor.appendChild(mountDoom);
};

itsDangerousToGoAlone();

// Part 11
//js
 var weWantsIt = function () {
    gollum = document.createElement('div');
    goll = document.createTextNode('gollum');
    gollum.appendChild(goll);
    gollum.setAttribute('id','gollum');
    var ring = document.getElementsByClassName('magic-imbued-jewelry')[0];
    gollum.appendChild(ring);
   // Create a div with an id of `'gollum'` and add it to Mordor
    mountDoom.appendChild(gollum);

    // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom

};

weWantsIt();

// Part 12
//js
var thereAndBackAgain = function () {

    mountDoom.removeChild(gollum);
   // remove `Gollum` and `the Ring` from the document
   var hobbs1 = document.getElementsByClassName('hobbit')[0];
   var hobbs2 = document.getElementsByClassName('hobbit')[1];
   var hobbs3 = document.getElementsByClassName('hobbit')[2];
   var hobbs4 = document.getElementsByClassName('hobbit')[3];
   var shire = document.getElementById('shire');
   console.log(shire);
   shire.appendChild(hobbs1);
   shire.appendChild(hobbs2);
   shire.appendChild(hobbs3);
   shire.appendChild(hobbs4);


   // Move all the `hobbits` back to `the shire`
};
thereAndBackAgain();





