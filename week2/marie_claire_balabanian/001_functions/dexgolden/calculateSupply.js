
var maxAge = 78;
var total;

function calculateSupply(currentAge, dailyAmt){
  total = (maxAge-currentAge)* 365 * Math.ceil(dailyAmt);
  console.log("You will need "+ total +" to last you until the ripe old age of " + maxAge );
  
}
 calculateSupply(29, 1);
 calculateSupply(1, 1.5);
 calculateSupply(50, 1);
