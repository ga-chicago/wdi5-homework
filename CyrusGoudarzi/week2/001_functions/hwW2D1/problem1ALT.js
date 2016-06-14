function age(x, y){
	return ('You are either ' + (x - y) + 'or ' + (x-y-1))
}

var age1 = calculateAge(2018, 1991);
var age2 = calculateAge(2016, 1993);
var age3 = calculateAge(2016, 1985);

console.log(age1)
console.log(age2)
console.log(age3)