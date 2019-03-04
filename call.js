// How can we reset the keyweord this so that we dont have repetiive code
var dog = {
    name: "Sam",
    sayHi: function () {
        console.log("Hi I am a dog and my name is" + this.name);
    }
}

var cat = {
    name: "Linda",
    sayHi: function() {
        console.log("Hi " + this.name);
    }
}

console.log(dog.sayHi())
console.log(cat.sayHi())

// Refactored using call explicit binding
var dog = {
    name: "Sam",
    sayHi: function () {
        console.log("Hi my name is " + this.name);
    }
}

var cat = {
    name: "Linda"
}

var puppy = {
    name: "Pumpernickel"
}


console.log(dog.sayHi())
console.log(dog.sayHi.call(cat))
console.log(dog.sayHi.call(puppy))


var universal = {
    sayHi: function () {
        console.log("Hi my name is " + this.name);
    }
}

var dragon = {
    name: "Dragon"
}

var witch = {
    name: "Hermione Granger"
}

var wizard = {
    name: "Albus Dumbledore"
}


console.log(universal.sayHi.call(dragon));
console.log(universal.sayHi.call(witch));
console.log(universal.sayHi.call(wizard));

// Imagine we want to select all the divs on a page
var divs = document.getElementsByTagName('div');
// How can we find all the divs that have the text "Hello". Using filter would be nice.
// divs.filter would return undefined because dis isn't not an array and filter is an array method
// We can convert an array like object into an array by using the slice method and making a copy of the array

// Let's use the slice method on arrays, but instead of the target of slice (the keyword this) being that array,
// let's set the target of the keyword of 'this' to be our div's array like object
var divArray = [].slice.call(divs);
divArray.filter(function(val) {
    return val.innerText === "Hello";
})

