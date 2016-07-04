var makeBlurb = function() {
  var fullSummaries = document.getElementsByClassName('blurb'); //this is an array of li's
  var tempWord = "";
  for (var i=0; i<fullSummaries.length; i++) {
    tempWord = fullSummaries[i].innerText.slice(0,50);
    fullSummaries[i].innerHTML = tempWord + "... <em>read more</em>";
  }
}
makeBlurb();

var truncDate = function() {
  var longDate = document.getElementsByTagName('small');
  var shortDate = "";
  shortDate = longDate[0].innerText.slice(4,15);
  longDate[0].innerText = shortDate;
}
truncDate();

// var lineBreak = function() {
//   var mainArticle = document.getElementsByClassName('mainArticle');
//   console.log(mainArticle[0].innerHTML);
// }
// lineBreak();
