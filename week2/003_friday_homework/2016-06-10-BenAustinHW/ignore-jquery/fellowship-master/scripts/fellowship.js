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
var section = '<section></section>';

function makeMiddleEarth() {
  var middleEarth = $(section);
  middleEarth.attr('id','middle-earth');
  $('body').append(middleEarth);
  lands.forEach(function(land){
    $('#middle-earth').append('<article><h1>'+land+'</h1></article>');
  });
}

makeMiddleEarth();

function makeHobbits(){
  $('article:first-child').append('<ul></ul>');
  hobbits.forEach(function(hobbit){
    $('ul').append('<li class="hobbit">'+hobbit+'</li>');
  });
}

makeHobbits();

function keepItSecretKeepItSafe(){
  $('.hobbit:first-child').append('<div id="the-ring" class="magic-imbued-jewelry"></div>');
}

keepItSecretKeepItSafe();

function makeBuddies(){
  $('article:nth-child(2)').append('<aside><ul></ul></aside>');
  buddies.forEach(function(buddy){
    $('aside ul').append('<li>'+buddy+'</li>');
  });

}

makeBuddies();

function beautifulStranger(){
  $('aside ul li').eq(3).html('Aragorn');
}

beautifulStranger();

function leaveTheShire(){
    $('aside ul').append($('article ul li'));
}

leaveTheShire();

function forgeTheFellowship() {
  $('aside').append('<div id="the-fellowship"></div>');
  $('#the-fellowship').append($('aside ul'));
  $('aside ul li').each(function(names){
    console.log($(this).text()); //fuck alert boxes
  })
}

forgeTheFellowship();

function theBalrog(){
  $('aside ul li').eq(4).text('Gandalf the White');
  $('aside ul li').eq(4).css({'backgroundColor':'white','border':'3px solid grey'});
}

theBalrog();

function hornOfGondor() {
  console.log('The horn of Gondor has been blown!');
  $('aside ul li').eq(8).remove();
}

hornOfGondor();

function itsDangerousToGoAlone() {
  $('article').eq(2).append($('aside ul li').eq(0));
  $('article').eq(2).append($('aside ul li').eq(0));
  $('article').eq(2).append('<div id="mount-doom"></div>');
}

itsDangerousToGoAlone();

function weWantsIt() {
  $('article').eq(2).append('<div id="gollum"></div>');
  $('#gollum').append($('#the-ring'));
  $('#mount-doom').append($('#gollum'));
}

weWantsIt();

function thereAndBackAgain(){
  $('#gollum').remove();
  $('article').eq(0).append($('.hobbit'));
}

thereAndBackAgain();
