    // Create red square and append to document

var newSquare = document.createElement("div");
newSquare.style.height = "100px";
newSquare.style.width = "100px";
newSquare.style.backgroundColor = "red";
newSquare.style.position = "absolute";
newSquare.style.top = "0";
newSquare.style.top = "0";
document.body.appendChild(newSquare);



    // Create green triangle and append to document

var newTriangle = document.createElement("div");
newTriangle.style.height = "0px";
newTriangle.style.width = "0px";
newTriangle.style.borderBottom = "solid green";
newTriangle.style.borderBottomWidth = "100px";
newTriangle.style.borderLeft = "solid transparent";
newTriangle.style.borderLeftWidth = "50px";
newTriangle.style.borderRight = "solid transparent";
newTriangle.style.borderRightWidth = "50px";
newTriangle.style.position = "absolute";
newTriangle.style.top = "0";
newTriangle.style.left = "100px";
document.body.appendChild(newTriangle);



    // Create blue circle and append to document

var newCircle = document.createElement("div");
newCircle.style.height = "100px";
newCircle.style.width = "100px";
newCircle.style.borderRadius = "100px";
newCircle.style.backgroundColor = "blue";
newCircle.style.position = "absolute";
newCircle.style.top = "0";
newCircle.style.left = "200px";
document.body.appendChild(newCircle);



    // Create orange trapezoidal and append to document

var newTrap = document.createElement("div");
newTrap.style.height = "0";
newTrap.style.width = "50px";
newTrap.style.borderTop = "solid orange";
newTrap.style.borderTopWidth = "100px";
newTrap.style.borderLeft = "solid transparent";
newTrap.style.borderLeftWidth = "50px";
newTrap.style.borderRight = "solid transparent";
newTrap.style.borderRightWidth = "50px";
newTrap.style.position = "absolute";
newTrap.style.top = "0";
newTrap.style.left = "300px";
document.body.appendChild(newTrap);



    // Create 100 different circles in different locations on the page

function makeCircles() {
  var x = 0;
  var y = 100;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      var makeCirc = document.createElement("div");
      makeCirc.style.height = "40px";
      makeCirc.style.width = "40px";
      makeCirc.style.borderRadius = "40px";
      makeCirc.style.backgroundColor = "black";
      makeCirc.style.position = "absolute";
      makeCirc.style.top = y + "px";
      makeCirc.style.left = x + "px";
      document.body.appendChild(makeCirc);
      x += 40;
    }
    x = 0;
    y += 40;
  }
}
makeCircles();



    // Create a button that appends 100 list items

var listBtn = document.createElement("button");
listBtn.style.height = "100px";
listBtn.style.width = "100px";
listBtn.style.background = "red";
listBtn.style.borderRadius = "50px";
listBtn.style.border = "thin solid black";
listBtn.style.position = "absolute";
listBtn.style.top = "500px";
listBtn.style.left = "0";
document.body.appendChild(listBtn);

listBtn.innerHTML = "<p>Make a List!</p>";

listBtn.addEventListener("click", function() {
  console.log("The event listener worked.");
  var newList = document.createElement("ul");
  newList.style.border = "thin solid purple";
  newList.style.position = "absolute";
  newList.style.top = "600px";
  newList.style.left = "0";
  document.body.appendChild(newList);
    for (var i = 1; i <= 101; i++) {
      var listItem = document.createElement("li")
      newList.appendChild(listItem);
      listItem.innerHTML = i;
    }
})
