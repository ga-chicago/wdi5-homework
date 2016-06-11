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

//\\//\////\\/\\/\\//\\/\\//\\\//\\\/\/\/\\\//\\/\/\\\/\/\/\/\\/\/\/\/\/\\/\/
//\\/\/\/\\/\\\/\\\\\\/////\/\/\/\/\/\/\//\\/\/\/\/\/\\\\\\/\\\\\//\\//////\\/
//\\\\\/\\/\/\/\\\\/\\/\\\////\\/\/\\/\/\\/\/\\\/\/\\/\\\/\/\/\/\/\/\/////\\\\
//\/\//\/\/\/\\\/\\\/\\\\/\\/\\/\\/\/\/\/\/\\\\\\///\\\\/\/\/\\\/\/\/\\\\\/\\/

   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`

var makeMiddleEarth = function () {
  var meSection = document.createElement('section');
  meSection.id = 'middle-earth';
  var shire = document.createElement('article');

  //CHECKPOINT 1
    for (var i = 0; i < lands.length; i++) {
      meSection.insertAdjacentHTML('beforeend', '<article id=land'+ i +'><h1>'+lands[i]+'</h1></article>');
    }
  document.body.appendChild(meSection);
};

makeMiddleEarth();


//\\//\////\\/\\/\\//\\/\\//\\\//\\\/\/\/\\\//\\/\/\\\/\/\/\/\\/\/\/\/\/\\/\/
//\\/\/\/\\/\\\/\\\\\\/////\/\/\/\/\/\/\//\\/\/\/\/\/\\\\\\/\\\\\//\\//////\\/
//\\\\\/\\/\/\/\\\\/\\/\\\////\\/\/\\/\/\\/\/\\\/\/\\/\\\/\/\/\/\/\/\/////\\\\
//\/\//\/\/\/\\\/\\\/\\\\/\\/\\/\\/\/\/\/\/\\\\\\///\\\\/\/\/\\\/\/\/\\\\\/\\/


// #### Part 2
// ```js
//    // display an `unordered list` of hobbits in the shire
//       // (which is the second article tag on the page)
//    // give each hobbit a class of `hobbit`
// };
// ```

var makeHobbits = function () {
  var hobbitList = document.createElement('ul');

  //putting members of hobbit array into ul: 
  for (var i = 0; i < hobbits.length; i++) {  
    var tempHobbit = document.createElement('li'); 
    tempHobbit.innerHTML = hobbits[i];
    tempHobbit.className="hobbit";//this doesn't seem to work. because it's saved over?
    hobbitList.appendChild(tempHobbit);
  }
            //console.log(hobbitList);
  land0.appendChild(hobbitList); //could you do this without giving the shire an arbitrary id?
  
};
makeHobbits();


//\\//\////\\/\\/\\//\\/\\//\\\//\\\/\/\/\\\//\\/\/\\\/\/\/\/\\/\/\/\/\/\\/\/
//\\/\/\/\\/\\\/\\\\\\/////\/\/\/\/\/\/\//\\/\/\/\/\/\\\\\\/\\\\\//\\//////\\/
//\\\\\/\\/\/\/\\\\/\\/\\\////\\/\/\\/\/\\/\/\\\/\/\\/\\\/\/\/\/\/\/\/////\\\\
//\/\//\/\/\/\\\/\\\/\\\\/\\/\\/\\/\/\/\/\/\\\\\\///\\\\/\/\/\\\/\/\/\\\\\/\\/

// #### Part 3
// ```js
// var keepItSecretKeepItSafe = function () {
//    // create a div with an id of `'the-ring'`
//    // give the div a class of `'magic-imbued-jewelry'`
//    // add the ring as a child of `Frodo`
// };
// ```

var keepItSecretKeepItSafe = function () {
  var ring = document.createElement('div');
  ring.id='the-ring';
  ring.className='magic-imbued-jewelry';
  var hobbitArray = document.getElementsByTagName('li');
            //console.log(hobbitArray);
            //console.log(hobbitArray[0]); //accessing the first HTMLCollection of li's. it is frodo.
  hobbitArray[0].appendChild(ring);
}
keepItSecretKeepItSafe();


//\\//\////\\/\\/\\//\\/\\//\\\//\\\/\/\/\\\//\\/\/\\\/\/\/\/\\/\/\/\/\/\\/\/
//\\/\/\/\\/\\\/\\\\\\/////\/\/\/\/\/\/\//\\/\/\/\/\/\\\\\\/\\\\\//\\//////\\/
//\\\\\/\\/\/\/\\\\/\\/\\\////\\/\/\\/\/\\/\/\\\/\/\\/\\\/\/\/\/\/\/\/////\\\\
//\/\//\/\/\/\\\/\\\/\\\\/\\/\\/\\/\/\/\/\/\\\\\\///\\\\/\/\/\\\/\/\/\\\\\/\\/

// #### Part 4

// ```js
// var makeBuddies = function () {
//    // create an `aside` tag
//    // attach an `unordered list` of the `'buddies'` in the aside
//    // insert your aside as a child element of `rivendell`
// // };
// ```

var makeBuddies = function () {
  var jAside = document.createElement('aside');
  var buddyList = document.createElement('ul');
  
  buddies.forEach(function(val, i){
    var bud = document.createElement('li');
    bud.innerHTML = buddies[i];
    buddyList.appendChild(bud);
  })

  jAside.appendChild(buddyList);
  land1.appendChild(jAside); //again, this arbitrary id is coming in handy. could i manage this assignment without it, though?
}
makeBuddies();


//\\//\////\\/\\/\\//\\/\\//\\\//\\\/\/\/\\\//\\/\/\\\/\/\/\/\\/\/\/\/\/\\/\/
//\\/\/\/\\/\\\/\\\\\\/////\/\/\/\/\/\/\//\\/\/\/\/\/\\\\\\/\\\\\//\\//////\\/
//\\\\\/\\/\/\/\\\\/\\/\\\////\\/\/\\/\/\\/\/\\\/\/\\/\\\/\/\/\/\/\/\/////\\\\
//\/\//\/\/\/\\\/\\\/\\\\/\\/\\/\\/\/\/\/\/\\\\\\///\\\\/\/\/\\\/\/\/\\\\\/\\/

// #### Part 5

// ```js
// var beautifulStranger = function () {
//    // change the `'Strider'` text to `'Aragorn'`
// };
// ```

var beautifulStranger = function () {
  var lis = document.getElementsByTagName('li');
        //console.log(lis);
  lis[7].innerHTML = "Aragorn";
}
beautifulStranger();


//\\//\////\\/\\/\\//\\/\\//\\\//\\\/\/\/\\\//\\/\/\\\/\/\/\/\\/\/\/\/\/\\/\/
//\\/\/\/\\/\\\/\\\\\\/////\/\/\/\/\/\/\//\\/\/\/\/\/\\\\\\/\\\\\//\\//////\\/
//\\\\\/\\/\/\/\\\\/\\/\\\////\\/\/\\/\/\\/\/\\\/\/\\/\\\/\/\/\/\/\/\/////\\\\
//\/\//\/\/\/\\\/\\\/\\\\/\\/\\/\\/\/\/\/\/\\\\\\///\\\\/\/\/\\\/\/\/\\\\\/\\/

// #### Part 6
// ```js
// var leaveTheShire = function () {
//    // assemble the `hobbits` and move them to `rivendell`
// };
// ```

var leaveTheShireWithoutUL = function () { //this worked but only moved the li's :/
  var hobs = document.getElementsByClassName('hobbit');
  var places = document.getElementsByTagName('article');
               //console.log(places[1]);

  for (var i = 0; i < hobs.length; i++){
    places[1].appendChild(hobs[i]); //so this, along with declaring the variable a few lines above is how i would access the 'lands' without having created those arbitrary IDs. Making sense... 
  }
}

var leaveTheShire = function () {
  var places = document.getElementsByTagName('article');
  var moveUL = places[0].getElementsByTagName('ul');
            //console.log(moveUL[0]); //the hobbit array
  places[1].appendChild(moveUL[0]);
}

leaveTheShire();


//\\//\////\\/\\/\\//\\/\\//\\\//\\\/\/\/\\\//\\/\/\\\/\/\/\/\\/\/\/\/\/\\/\/
//\\/\/\/\\/\\\/\\\\\\/////\/\/\/\/\/\/\//\\/\/\/\/\/\\\\\\/\\\\\//\\//////\\/
//\\\\\/\\/\/\/\\\\/\\/\\\////\\/\/\\/\/\\/\/\\\/\/\\/\\\/\/\/\/\/\/\/////\\\\
//\/\//\/\/\/\\\/\\\/\\\\/\\/\\/\\/\/\/\/\/\\\\\\///\\\\/\/\/\\\/\/\/\\\\\/\\/

// #### Part 7 

// ```js
// var forgeTheFellowShip = function () {
//    // create a new div called `'the-fellowship'` within `rivendell`
//    // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
//    // after each character is added make an alert that they // have joined your party
// };
// ```
var forgeTheFellowShip = function () {

  var theFellowship = document.createElement('div');
  theFellowship.id='theFellowship';

  var places = document.getElementsByTagName('article'); //gives u access to rivendale
  var ulsInRiven = places[1].getElementsByTagName('ul'); // all the ul's in rd, as htmlc.
     // var hobs = ulsInRiven[0]; //hobbits
     // var buds = ulsInRiven[1]; //buddies
  var lisInRiven = places[1].getElementsByTagName('li'); // all the li's in rd, as 
  places[1].appendChild(theFellowship);

  // for (var i = 0; i < lisInRiven.length; i++) {
  //   theFellowship.appendChild(lisInRiven[i]);
  // }   //does something weird but close to what i want 

  console.log(lisInRiven.length); //9!!!

//for (var i = 0; i < lisInRiven.length; i++){

        // theFellowship.innerHTML += lisInRiven[i].innerHTML;  
    // window.alert(lisInRiven[i].innerHTML + " has been added to ur party");
//}

  for (var i = 0; i < ulsInRiven.length; i++){
       //theFellowship.innerHTML += ulsInRiven[i].innerHTML;
       theFellowship.appendChild(ulsInRiven[i]);
   //STOP    window.alert(ulsInRiven[i].innerHTML + " has been added to your party");
  }    // says it adds hobbits but doesn't :( ITS WRITING OVER IT 




  theFellowship.appendChild(ulsInRiven[0]);
 //STOP window.alert(ulsInRiven[1].innerHTML + " has been hardcoded into your party");
// ¯\_(ツ)_/¯

}

forgeTheFellowShip();

//SORT OF WORKS. COME BACK


//\\//\////\\/\\/\\//\\/\\//\\\//\\\/\/\/\\\//\\/\/\\\/\/\/\/\\/\/\/\/\/\\/\/
//\\/\/\/\\/\\\/\\\\\\/////\/\/\/\/\/\/\//\\/\/\/\/\/\\\\\\/\\\\\//\\//////\\/
//\\\\\/\\/\/\/\\\\/\\/\\\////\\/\/\\/\/\\/\/\\\/\/\\/\\\/\/\/\/\/\/\/////\\\\
//\/\//\/\/\/\\\/\\\/\\\\/\\/\\/\\/\/\/\/\/\\\\\\///\\\\/\/\/\\\/\/\/\\\\\/\\/


// #### Part 8

// ```js
// var theBalrog = function () {
//    // change the `'Gandalf'` text to `'Gandalf the White'`
//    // apply the following style to the element, make the // background 'white', add a grey border
// };
// ```

//NOTE: Continuing even though PART 7 is pretty busted.
var theBalrog = function () {
  var lis = document.getElementsByTagName('li');

  console.log(lis);
  console.log(lis[0]);

  lis[0].innerHTML="Gandalf the White";
  lis[0].style.backgroundColor="ghostwhite";
  lis[0].style.border="5px grey solid";
  lis[0].style.color="#f0f0f0";

}

theBalrog();


//\\//\////\\/\\/\\//\\/\\//\\\//\\\/\/\/\\\//\\/\/\\\/\/\/\/\\/\/\/\/\/\\/\/
//\\/\/\/\\/\\\/\\\\\\/////\/\/\/\/\/\/\//\\/\/\/\/\/\\\\\\/\\\\\//\\//////\\/
//\\\\\/\\/\/\/\\\\/\\/\\\////\\/\/\\/\/\\/\/\\\/\/\\/\\\/\/\/\/\/\/\/////\\\\
//\/\//\/\/\/\\\/\\\/\\\\/\\/\\/\\/\/\/\/\/\\\\\\///\\\\/\/\/\\\/\/\/\\\\\/\\/

// #### Part 9
// ```js
// var hornOfGondor = function () {
//    // pop up an alert that the horn of gondor has been blown
//    // Boromir's been killed by the Uruk-hai!
//    // Remove `Boromir` from the Fellowship
// };
// ```

var hornOfGondor = function () {
  window.alert("horn blown");
  var lis = document.getElementsByTagName('li');
  // lis[4].innerHTML = ""; eliminates text of Boromir, as expected 
} 
hornOfGondor();











