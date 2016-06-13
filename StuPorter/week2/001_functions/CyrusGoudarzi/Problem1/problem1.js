function calculateAge (x, y) {
  return 'You are either ' + (x - y) + ' or ' + (x-y - 1)
}
var age1 = calculateAge(2016, 1991)
var age2 = calculateAge(2016, 1989)
var age3 = calculateAge(2016, 1987)

console.log(age1)
console.log(age2)
console.log(age3)
