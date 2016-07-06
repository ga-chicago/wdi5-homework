//  CHECK FUNCTIONALITY OF JS LINK  //
//////////////////////////////////////

console.log("The JS is linked up and working.");


//  RUN ALL FUNCTIONS  //
/////////////////////////

$(document).ready(function() {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBuddies();
  beautifulStranger();
  leaveTheShire();
  forgeTheFellowship();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
})


//  CREATE CHARACTERS AND LANDS OF MIDDLE EARTH  //
///////////////////////////////////////////////////

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
var section = '<section></section>';


//  PART 1 - CONSTRUCT MIDDLE EARTH  //
///////////////////////////////////////

function makeMiddleEarth() {
  var middleEarth = $(section);
  middleEarth.attr('id', 'middle-earth');
  $(body).append(middleEarth);
  lands.forEach(function(land) {
    $('#middle-earth').append('<article><h1>' + land + '</h1></article>');
  });
}


//  PART 2 - MAKE HOBBITS IN THE SHIRE  //
//////////////////////////////////////////

function makeHobbits() {
  $('article:first-child').append('<ul></ul>');
  hobbits.forEach(function(hobbit) {
    $('ul').append('<li class="hobbit">' + hobbit + '</li>');
  });
}


//  PART 3 - MAKE THE RING AND GIVE IT TO FRODO  //
///////////////////////////////////////////////////

function keepItSecretKeepItSafe() {
  $('li:first-child').append('<div id="the-ring" class="magic-imbued-jewelry"></div>');
};


//  PART 4 - ASSEMBLE THE HOBBITS' BUDS IN RIVENDELL  //
////////////////////////////////////////////////////////

function makeBuddies() {
  $('article:nth-child(2)').append('<aside><ul></ul></aside>');
  buddies.forEach(function(buddy) {
    $('aside ul').append('<li class="buddy">' + buddy + '</li>');
  });
}


//  PART 5 - GIVE ARAGORN HIS PROPER NAME  //
/////////////////////////////////////////////

function beautifulStranger() {
  $('aside li:nth-child(4)').text('Aragorn');
};


//  PART 6 - THE HOBBITS JOURNEY TO RIVENDELL  //
/////////////////////////////////////////////////

function leaveTheShire() {
  $('article:first-child ul').appendTo($('article:nth-child(2) aside'));
};


//  PART 7 - THE FELLOWSHIP IS FORMED  //
/////////////////////////////////////////

function forgeTheFellowship() {
  $('aside').append('<div id="the-fellowship"><ul></ul></div>');
  $('#the-fellowship ul').append($('aside ul li'));
  $('#the-fellowship ul li').each(function(name) {
    alert($(this).text() + ' has joined the fellowship!');
  });
};


//  PART 8 - GANDALF CHANGES FORMS  //
//////////////////////////////////////

function theBalrog() {
  $('li:first-child').text('Gandalf the White');
  $('li:first-child').css({'backgroundColor': 'white', 'border': '3px solid grey'})
};


//  PART 9 - Poor Boromir (and the horn)  //
////////////////////////////////////////////

function hornOfGondor() {
  alert('The Horn of Gondor has been blown!');
  alert('Boromir has been slain by the Uruk-hai.');
  $('aside li:nth-child(5)').remove();
};


//  PART 10 - FRODO AND SAM STRIKE OUT ALONE  //
////////////////////////////////////////////////

function itsDangerousToGoAlone() {
  $('aside li:nth-child(5)').appendTo('article:nth-child(3)');
  $('aside li:nth-child(6)').appendTo('article:nth-child(3)');
  $('article:nth-child(3)').append('<div id=mount-doom></div>');
};


//  PART 11 - GOLLUM APPEARS AND GETS THE RING!  //
///////////////////////////////////////////////////

function weWantsIt() {
  $('article:nth-child(3)').append('<div id=gollum></div>');
  $('#the-ring').appendTo('#gollum');
  $('#gollum').appendTo('#mount-doom');
};


//  PART 12 - THE ADVENTURE ENDS; EVERYBODY JUST KIND OF...GOES HOME.  //
/////////////////////////////////////////////////////////////////////////

function thereAndBackAgain() {
  $('#gollum').remove();
  $('article:nth-child(1)').append('<ul></ul>');
  $('article:nth-child(3) li').appendTo('article:nth-child(1) ul');
  $('aside li:nth-child(5)').appendTo('article:nth-child(1) ul');
  $('aside li:nth-child(5)').appendTo('article:nth-child(1) ul');
};

































