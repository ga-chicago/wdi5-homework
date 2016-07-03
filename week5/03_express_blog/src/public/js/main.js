var makeBlurb = function() {
  var fullSummaries = document.getElementsByClassName('blurb'); //this is an array of li's
  var arr = [];
  var tempWord = "";

  // for (var i=0; i<fullSummaries.length; i++) {
  //   fullSummaries[i].innerHTML = 'fuck'
  // }
  // console.log(fullSummaries.length);  --> 17

  for (var i = 0; i < fullSummaries.length; i ++) {
    console.log(fullSummaries[i].innerText.length); //
  }

// Where you left off: you can get the bodies to be replaced with text; figure out how to 
// shorten the bodies here and replace them. I'm pretty sure you can do / have done this
// before






  // for (var i = 0; i < fullSummaries.length; i ++) { //each blurb
  //   for (var m = 0; m < fullSummaries[i].innerText.length; m++)
  //   if (fullSummaries[i][m].innerText !==" ") {
  //     tempWord += fullSummaries[i][m];
  //   }
  //   else {
  //     arr.push(tempWord);
  //     tempWord = "";
  //   }
  //   console.log(arr);
  // }

  // var blurbText = "";
  // for (var j = 0; j < 15; j++) {
  //   blurbText += arr[j] + " ";
  // }
  // blurbText += "...<em>read more</em>";
  
  
}
makeBlurb();
