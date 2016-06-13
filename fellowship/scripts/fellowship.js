
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

/// The completed JS code for Fellowship HW

////Part 1
//////////

// to make the original function you need a variable
// the middleEarth variable needs to create the original
// *container*? (check on word). Within the section work can now be done
// then an id is created with an id name middleEarth.id so it can be called on
// after variables for all the lands are made using create elements through
// the article section.
//after that we need to use appendChild on the lands to append it to the
// middleEarth section. Basically it was applied within the middle earth section

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

// **** I would always call the function after every problem 
// to make sure it would work on the actual webpage ****

makeMiddleEarth()

////Part 2
//////////

// through a function I was able to create a ul 
// through createElement in the form of var = hobbitList
// the For function is used to add a hobitListItem
// which is appended to hobbit list. A class name is then made
// then hobitListItem is appended on to hobbit list
// the function comes in when the innerHtml is displayed loops
//from the var = hobbits array in the variables at the top

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

makeHobbits()

////Part 3
//////////

// now a function needs to be created have the ring applied
// to frodo. to do this you need to do the 4 step process of creating
// and linking the ring first
// step 1: create the var 'ring' and equate it too
// createElement.div
// step 2: give teh ring an id
// step 3: give the ring a class name

// step 4: access the hobbit classname and appendChild the 
// var = ring 
// this will append the entire div that was created for the ring
// onto the hobbit Frodo which equates to [0] in the index


var keepItSecretKeepItSafe = function () {
  var ring = document.createElement('div');
  ring.id = 'the-ring';
  ring.className = 'magic-imbued-jewelry';
  document.getElementsByClassName('hobbit')[0].appendChild(ring);
};

keepItSecretKeepItSafe()


//// PART 4
////////////

// Now I made a function to run two variables to create an 
// aside element and an unordered list. This will create two
// areas within the section
// now we need to append the buddies onto the buddies list 'ul'
// to do this we need to create a for function that uses
// the buddies.length. within the function write a for loop
// that will include the var buddiesListItem which will
// get the names to pop up.
// after this append the buddiesListItem item onto buddiesList
// on buddiesListItem append the buddies(j function)


var makeBuddies = function () {
  var asideVar = document.createElement('aside');
  var buddiesList = document.createElement('ul');
  for(var k = 0; k < buddies.length; k++){
    var buddiesListItem = document.createElement('li'); 
    buddiesList.appendChild(buddiesListItem);
    buddiesListItem.innerHTML = buddies[k];
  }
   asideVar.appendChild(buddiesList);
   document.getElementById('Rivendell').appendChild(asideVar);   
};

makeBuddies()


////Part 5
///////////

// The point of part 5 is to make a function that runs
// and accesess the li through getElementsByTagName('li')
// in the li you want to go to the 7th on the index 
// because Aragorn is the 8th on the index **but it starts at 0**
// equate the innerHTML to = "Aragorn"

var beautifulStranger = function () {   
  document.getElementsByTagName("li")[7].innerHTML = "Aragorn";
};

beautifulStranger()

////Part 6
//////////

// the point of part 6 is to get unordered list ('ul')
// which is the hobbits out of the shire
// to do this run a function with a for loop
// that adds the unordered list to rivenDell by
// appending the child of 'hobbits' to it

var leaveTheShire = function () {   
  for(var h = 0; h < 4; h++){
    document.getElementsByTagName('ul')[1].appendChild(document.getElementsByClassName('hobbit')[0]);  
  };
};

// above the first ul is [1] becasue you are moving them to Rivendell
// so by calling that first index it is referring to rivendell
// and the second index that is called is [0] is referring too
// the first hobbit in which needs to be looped because every time
// as each item shift index[0] is requred to be moved 4 times

leaveTheShire()

////Part 7
//////////

// the purpose of part 7 is to run a function that
// creates a div and contains the fellowship
// do this by creating the div through createElement
// make an id and then append the fellowshipVar to Rivendell
// to assemble this group within Rivendell that can be moved 
// around togther
// there are 9 people in the loop so you need to include that
// in the "For loop"


var forgeTheFellowShip = function () {  
  var fellowshipVar = document.createElement('div'); 
  fellowshipVar.id = 'the-fellowship';          
  fellowshipVar.innerHTML='the-fellowship';
  document.getElementById('Rivendell').appendChild(fellowshipVar);

  for(var f = 0; f < 9; f++){
    

    // alert(document.getElementsByTagName("li")[0].textContent + " has joined the The Fellowship"); 
    
    // ^^^unmessage above to make sure it works when running the project^^^

    //keeping the above alert in message form so it does not disrupt the flow of the game.
    

    document.getElementById('the-fellowship').appendChild(document.getElementsByTagName("li")[0]);    
  };
};

forgeTheFellowShip()


////Part 8
//////////

// The purpose of part 8 is to change the gandalf element
// by changing the text and adding a background color and border
// the function that runs needs to call the li's
// and the first list which is index[0] is Gandalf
// so call Gandalf by doing the document.getElementsByTag and after
// [0] add text, background color and border
// do this by using style.text content for the first and
// style.border for the second


var theBalrog = function () {
  document.getElementsByTagName("li")[0].textContent= "Gandalf the White";
  document.getElementsByTagName("li")[0].style.backgroundColor = "white";
  document.getElementsByTagName("li")[0].style.border = "solid grey"
};

theBalrog()

////Part 9
//////////

var hornOfGondor = function () {

  //**** I used a message below because I did not want to
  // have the function disrupt the layout of the program
  // to make sure it works just unmessage the code right below
  // ************************************** 

  // alert("The horn of gondor has been blown!! Boromir's been killed by the Uruk-hai!"); 

  document.getElementById("the-fellowship").removeChild(document.getElementsByTagName("li")[4]);
};

hornOfGondor()

////Part 10
//////////

// the purpose of part 10 is to append the ('li') of frodo
// and sam to mordor. this is done by appending 
// ('li')[4]. It is important to note that you use index[4]
// twice because once you move it once the index[5]
// which is sam shifts down to index[4]


// now you also within the function have to create the
// var = mount-doom
//with this var equate it to a div by using document.createElement command


var itsDangerousToGoAlone = function (){
  document.getElementById('Mordor').appendChild(document.getElementsByTagName("li")[4]);
  document.getElementById('Mordor').appendChild(document.getElementsByTagName("li")[4]);
  var mountDoom = document.createElement('div');
  mountDoom.id='mount-doom';
  document.getElementById('Mordor').appendChild(mountDoom);
};

itsDangerousToGoAlone()

////Part 11
///////////

// The purpose of part 12 is to run a function
// that will create a div for gollum
// and put him inside the Mordor element.


var weWantsIt = function () {
   var gollum = document.createElement('div');
   gollum.id='gollum';
   gollum.innerHTML='Gollum';
   document.getElementById('Mordor').appendChild(gollum);
   gollum.appendChild(document.getElementById('the-ring'));
   document.getElementById('mount-doom').appendChild(gollum);
};

weWantsIt();

////Part 12
///////////

// to remove Gollum you need to access the mount doom element and then use
// removeChild element and getElementByID to remove gollum and the ring

// to get the hobbits back in the shire you need to call the
// .getElementByID for the 'Shire' then the child is appended
// the child that is appended is the class name hobbits

// gh var stands for go home

var thereAndBackAgain = function () {

   document.getElementById('mount-doom').removeChild(document.getElementById('gollum'));
   for(var gh = 0; gh < 4; gh++){
    document.getElementById('Shire').appendChild(document.getElementsByClassName('hobbit')[gh]);
  };   
};


thereAndBackAgain();


