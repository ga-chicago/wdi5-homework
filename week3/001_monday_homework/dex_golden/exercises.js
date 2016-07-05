///Problem 1

var words = ["hello", "what", "is", "up", "dude"];
var lengthsArray = [];
function lengths(arrayOfStrings) {
  console.log(arrayOfStrings);  
  arrayOfStrings.forEach(function(value, index){
    lengthsArray.push(value.length);
  });
  return lengthsArray;
}
console.log(lengths(words));
/////
console.log("////////////////");

////Problem 2

function transmogrifier(a,b,c){
  return Math.pow((a*b),c);

}
console.log(transmogrifier(5, 4, 3));
console.log(transmogrifier(13, 12, 5));
console.log(transmogrifier(42, 13, 7));

//////Problem 3

function toonify(accent, sentence){
  if(accent == 'daffy'){
    var rep = /s/gi;
    var newstr = sentence.replace(rep, "th");
  }else if(accent == 'elmer'){
    var rep = /r/gi;
    var newstr = sentence.replace(rep, "w");
  }else{
    var newstr = "No accent. " + sentence;
  }
  return newstr;
}
console.log(toonify('daffy','Sufferin suckatash'));
console.log(toonify('elmer','Come here, you rascally rabbit!'));
console.log(toonify('marvin','Martians do not have accents'));

///////
///Problem 4

function wordReverse(startSentence){  
  return startSentence.split(" ").reverse().join(' ');
}

///////
///Problem 5

function letterReverse(startSentence){  
  var finalOut = [];
  var spaceSpot = 0;
  var tempArray = [];
  while(startSentence.indexOf(' ') != -1){
    spaceSpot = startSentence.indexOf(' '); //find the SPACE
    tempArray = startSentence.substr(0,spaceSpot); //get character before SPACE
    finalOut.push(tempArray.split('').reverse().join('')); // put them into an array,split apart, revers, and rejoin
    startSentence = startSentence.slice(spaceSpot+1);// update sentence to only include unsearched chracters
  }
  tempArray = startSentence.substr(0,startSentence.length); //same as above needs to be repeated for last word, as their is nospace
                                                              // ... after last word insentnce
    finalOut.push(tempArray.split('').reverse().join(''));

  return finalOut.join(' ');  
}
// letterReverse('I like games of video and board type'); ///TEST LINE
// letterReverse('Now I know what a TV dinner feels like'); ///TEST LINE
///////////////
//Problem 6
function longest(submittedArray) {
  var champ = submittedArray[0];  
  for(var j = 0; j < submittedArray.length ; j++) {
    if(submittedArray[j].length > champ.length){
      champ = submittedArray[j];
      console.log("changed" + champ);
    }
  }   
  return champ;
}
//console.log(longest(['ape','beep','cee', 'deeep', 'eep', 'feeep', 'geep'])); // test line

/////////
//FINAL ROUND
//will only work with functions wordReverse() and letterReverse(), as they are the only 2 that take a string as argument

function repMaster(string, functionName) { 
  console.log(functionName(string) + " proves that I am the rep MASTER!");
}
repMaster("Sometimes less is just less", wordReverse); //TEST LINE
repMaster("Sometimes less is just less", letterReverse);// TEST LINE
