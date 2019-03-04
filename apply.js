function addAllNumbers(a,b,c,d) {
    return this.firstName + " " + (a+b+c+d);
}

var hobbist = {
    firstName: 'Billy'
}

var tourist = {
    firstName : 'Johnny'
}

var adventurous = {
    firstName: 'Johnathan'
}

console.log(addAllNumbers.call(tourist, 1,2,3,4))
console.log(addAllNumbers.apply(hobbist, [1,2,3,4]));

// When can we use apply vs call?
// When a function dosen't accept an array, apply will spread out all the values in an array for us
var nums = [1,5,3,8,2];
console.log(Math.max(nums)) // This outputs NAN because Math.max doesn't accept an array

// This however will takes the values from nums and spread them out of an array allowing
// our math.max to work when apply is used
var result = Math.max.apply(this, nums);
console.log(result)

// Another example
var values = [1,2,3,4];
function sumValues(a,b,c) {
    return a+b+c;
}
console.log(sumValues(values))

console.log(sumValues.apply(this, values))




