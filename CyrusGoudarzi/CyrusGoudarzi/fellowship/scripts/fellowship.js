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
var makeMiddleEarth = function () {
  var MiddleEarth = document.createElement('section')
  MiddleEarth.setAttribute("middle-earth", "id") 
  var theShire = document.createElement('article')
  theShire.id = "theShire"
  var Rivendell = document.createElement('article')
  Rivendell.id = "Rivendell"
  var Mordor = document.createElement('article')
  Mordor.id = "Mordor"
  var theGreenDragonInn = document.createElement('h1')
  var Elrond = document.createElement('h1')
  var mountDoom = document.createElement('h1')
  
  theShire.appendChild(theGreenDragonInn)
  Rivendell.appendChild(Elrond)
  Mordor.appendChild(mountDoom)
  MiddleEarth.appendChild(theShire)	
  MiddleEarth.appendChild(Rivendell) 
  MiddleEarth.appendChild(Mordor)
  theGreenDragonInn.innerHTML = (lands[0])
  Elrond.innerHTML = (lands[1])
  mountDoom.innerHTML = (lands[2])
  document.body.appendChild(MiddleEarth)
  return MiddleEarth
}
makeMiddleEarth()

var makeHobbits = function () {
  var concerningHobbits = document.createElement('ul');
  concerningHobbits.id = "concerningHobbits"
  for(var i = 0; i < hobbits.length; i++) {
    var individualHobbits = document.createElement('li');
    individualHobbits.className = "hobbit";
    individualHobbits.innerHTML = (hobbits[i]);
    concerningHobbits.appendChild(individualHobbits);
    
  }
  theShire.appendChild(concerningHobbits)

}	

makeHobbits()

var keepItSecretKeepItSafe = function () {
    var myPrecious = document.createElement('div')
    myPrecious.id = ('the-ring')
    myPrecious.className = ('magic-imbued-jewelry')
    document.getElementsByClassName("hobbit")[0].appendChild(myPrecious)

}

keepItSecretKeepItSafe()
var makeBuddies = function () {
   var council = document.createElement('aside')
   var Buddies = document.createElement('ul')
   for (var i = 0; i < buddies.length; i++) {
      var individualBuddies = document.createElement('li')
      individualBuddies.className = "Buddy"
      individualBuddies.innerHTML = (buddies[i])
      Buddies.appendChild(individualBuddies)
   }
   council.appendChild(Buddies)
   Rivendell.appendChild(council)
}
makeBuddies()

var beautifulStranger = function () {
   document.getElementsByClassName("Buddy")[3].innerHTML = ("Aragorn")
};

beautifulStranger()

var leaveTheShire = function () {
  var farewellShire = document.getElementById("concerningHobbits")
  Rivendell.appendChild(farewellShire)
};

leaveTheShire()

var forgeTheFellowShip = function () {
  theFellowship = document.createElement('div')
  theFellowship.id = "the-fellowship"
  Rivendell.appendChild(theFellowship)
  for (var i = 0; i < 9; i++) {
    var hobbitJoined = document.getElementsByTagName("li")[0]
    theFellowship.appendChild(hobbitJoined)
    alert(document.getElementsByTagName("li")[0].textContent + " has joined the Fellowship!")
  }

};

forgeTheFellowShip()

var theBalrog = function () {
   document.getElementsByTagName("li")[0].innerHTML = ("Gandalf the White")
   document.getElementsByTagName("li")[0].style.backgroundColor = "white"
   document.getElementsByTagName("li")[0].style.border = "thick solid grey"
};

theBalrog()

var hornOfGondor = function () {
    alert("The horn of Gondor has been blown! Boromir has fallen to the Uruk-hai!")
    document.getElementById("the-fellowship").removeChild(document.getElementsByTagName("li")[4])
   // Remove `Boromir` from the Fellowship
};

hornOfGondor()

var itsDangerousToGoAlone = function (){
   Mordor.appendChild(document.getElementsByTagName("li")[4])
   Mordor.appendChild(document.getElementsByTagName("li")[4])
   var mountDoom = document.createElement('div')
   mountDoom.id = "mount-doom"
   Mordor.appendChild(mountDoom)
};

itsDangerousToGoAlone()

 var weWantsIt = function () {
   smeegle = document.createElement('div')
   smeegle.id = "Gollum"
   Mordor.appendChild(smeegle)
   smeegle.appendChild(document.getElementById('the-ring'))
   document.getElementById('mount-doom').appendChild(document.getElementById('Gollum'))

};

weWantsIt()

var thereAndBackAgain = function () {
   document.getElementById('mount-doom').removeChild(document.getElementById('Gollum'))
   theShire.appendChild(document.getElementsByTagName("li")[6])
   theShire.appendChild(document.getElementsByTagName("li")[6])
   theShire.appendChild(document.getElementsByTagName("li")[6])
   theShire.appendChild(document.getElementsByTagName("li")[7])
};

thereAndBackAgain()










 

  


var body = document.body;



