function calculateSupply(age, amt) {
  maxAge = 81;
  amt = Math.round(amt);
  totalCon = amt*365*(maxAge-age);
  return 'You will need '+totalCon+ ' bars of candy to last you until the ripe old age of '+maxAge;

}

console.log(calculateSupply(19,10));
console.log(calculateSupply(33,100));
console.log(calculateSupply(57,32.2));
