function caclulateSupply (x, y) {
  var maxAge = 78
  return 'You will need ' + ((maxAge - x) * (365 * y)) + ' dollars to last you until the ripe old age of ' + maxAge
}

var age1 = caclulateSupply(24, 1)
var age2 = caclulateSupply(58, 2.50)
var age3 = caclulateSupply(12, 2.25)

console.log(age1)
console.log(age2)
console.log(age3)
