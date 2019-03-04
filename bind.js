function addNumbers(a,b,c,d) {
    return this.firstName + " is adding " + (a+b+c+d);
}

var pet = {
    firstName: 'Rufus'
}

var calculate = addNumbers.bind(pet,1,2,3,4);
console.log(calculate());

var calculateAgain = addNumbers.bind(pet,1,2);
console.log(calculate(3,4))