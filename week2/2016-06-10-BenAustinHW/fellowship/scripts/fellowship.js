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
      meSection.insertAdjacentHTML('afterbegin', '<article id=land'+ i +'><h1>'+lands[i]+'</h1></article>');
    }
  document.body.appendChild(meSection);
};

makeMiddleEarth();















//NON-LOOPED VERSION OF CHECKPOINT 1
  // meSection.insertAdjacentHTML('afterbegin', 
  //   '<article id="shire"><h1>The Shire</h1></article>');
  // var shireTitle = document.createElement('h1');
  // document.body.appendChild(shireTitle);

