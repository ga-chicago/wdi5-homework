
// Problem 1

// declare function named "lengths"
// that accepts a arguments named "arrayOfStrings"
function lengths(arrayOfStrings) {
  var arrayNum = [];
  for (var i = 0; i < arrayOfStrings.length; i++) {
    arrayNum[i]=arrayOfStrings[i].length;
  };

  return arrayNum;

}

// Problem 2

function transmogrifier(x,y,z) {
  var product = (x*y);
  return  Math.pow(product,z);
}

// Problem 3

function toonify(accent, sentence) {
  if(accent==='daffy'){

    // Splits sentence into indiv words
    sentence1 = sentence.split(" ");

    //for dividing words into letters
    var bigArray = [];
    var newSent = '';
    for (var i = 0; i < sentence1.length; i++) {

      var sentence2 = sentence1[i].split("");
      bigArray[i] = sentence2;

      // for checking each letter and changing it
      var newWord = ''
      for (var t = 0; t < bigArray[i].length; t++) {
        if (bigArray[i][t]==='s') {
          bigArray[i][t] = 'th';
        }
      var newWord = newWord+bigArray[i][t]
      }

      newSent = newSent + ' '+newWord;
    }

    return newSent;
    }
  else if(accent==='elmer'){

    // Splits sentence into indiv words
    sentence1 = sentence.split(" ");

    //for dividing words into letters
    var bigArray = [];
    var newSent = '';
    for (var i = 0; i < sentence1.length; i++) {

      var sentence2 = sentence1[i].split("");
      bigArray[i] = sentence2;

      // for checking each letter and changing it
      var newWord = ''
      for (var t = 0; t < bigArray[i].length; t++) {
        if (bigArray[i][t]==='r') {
          bigArray[i][t] = 'w';
        }
      var newWord = newWord+bigArray[i][t]
      }

      newSent = newSent + ' '+newWord;
    }

    return newSent;
    }

    return sentence;
  }


//Problem4

function wordReverse(randString) {
  var stringArr = randString.split(" ");
  var reverseArr = stringArr.reverse();
  newString = [];
  for (var i = 0; i < reverseArr.length; i++) {
    newString = newString +" "+ reverseArr[i];
  }

  return newString;


  
}

//Problem5

function letterReverse(string1) {
  var ret = '';
  var stringArr = string1.split(" ");
  for (var i = 0; i < stringArr.length; i++) {
      value = stringArr[i];
      val1 = value.split("");
      var rev = val1.reverse();

      for (var t = 0; t < rev.length; t++) {
      var ret = ret +rev[t];
      
    }
    ret = ret+" ";

  }

    return ret
  }

//Problem6

  function longest(stringArray) {

   for (var i = 0; i < stringArray.length; i++) {
      if (i===0 || stringArray[i].length>stringArray[i-1].length){
        var max = stringArray[i];
      }
    }
   return max;
  }


//Problem7


function repMaster(aInput,funct) {
  if (funct == toonify) {
    return funct(aInput[0],aInput[1])+ ' proves im unreal';
  }
  else if (funct == transmogrifier) { 
    return funct(aInput[0],aInput[1],aInput[2]).toString()+ ' proves im unreal';
  }
  return funct(aInput)+' proves im unreal';

}




