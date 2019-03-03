"use strict"
// The global context of the keyword this is the window object
// console.log(this);

// // What is the value of this when decalred inside of a function
// function whatIsThis () {
//     console.log(this);
// }
// console.log(whatIsThis());

// function somethingElse() {
//     this.name = "Alex";
// }
// somethingElse()

// console.log(name);

// When using strict mode the keyword this declard inside of a function is undefined

console.log(this)
function whatsThis() {
    return this;
}
console.log(whatsThis())
function printName() {
    this.name = 'Laura';
}
console.log(printName());

