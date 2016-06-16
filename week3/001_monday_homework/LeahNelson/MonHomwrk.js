
// declare function named "lengths"
// that accepts arguments named "arrayOfStrings"


var cities = ["Miami", "Chicago", "LA", "Austin", "Atlanta"];
var strlength = [];


function lengths(arrayOfStrings) {
  for(var i = 0 ; i < arrayOfStrings.length; i++){
    console.log(arrayOfStrings[i].length);
    strlength.push(arrayOfStrings[i].length);

    
  }
  return strlength;
  console.log(strlength);

}
lengths(cities);

function transmogrifrier(x,y,z){
   // var p1 = x * y;
   var result = Math.pow( (x * y) , z);
   console.log(result);
}
// transmogrifier(5, 4, 3);
// transmogrifier(13, 12, 5);
// transmogrifrier(42, 13, 7);


function toonify(accent, sentence){
  if (accent === 'daffy'){
    var newSentence = sentence.replace(/s/g, 'th');

  }else if(accent === 'elmer'){
    var newSentence = sentence.replace(/r/g, 'w');

  }else{
    return sentence;
  };
  console.log(newSentence);
};

// toonify('daffy','so you smell like sausage');
// toonify('elmer', 'run away you rascally rabbit');

var string = "Now I know what a TV dinner feels like";

function wordReverse(string){
  var splitIt = string.split(" ");
  
  var ReverseIt = splitIt.reverse();
  
  var newArray = ReverseIt.join(" ");
  
  console.log(newArray);
};

 // wordReverse(string);

// var split = [];
function letterReverse(string){
  var splitString = string.split( );
     // string = splitIt[0];
     // console.log(splitString);
     var strReverse = splitString[0].split('').reverse().join('');
    // a = split.reverse
    // console.log(a);

  

  // var Join = splitIt.reverse( );
  // console.log(splitIt);
  console.log(strReverse);

}


letterReverse("Now I know what a TV dinner feels like");
letterReverse("Put Hans back on the line");

function longest(string){
  
}

 
