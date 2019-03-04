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

// When can we use apply vs call


