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

// 
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

