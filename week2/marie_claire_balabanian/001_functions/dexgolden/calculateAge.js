function calculateAge(birthYear) {
  var today = new Date();
  var currentYear = today.getFullYear();
  console.log("Your age is either " + (currentYear - birthYear) + " or " + (currentYear - birthYear -1) );
}

calculateAge(1986);
calculateAge(1970);
calculateAge(1892);
