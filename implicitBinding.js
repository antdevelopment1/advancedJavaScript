// strict mode doesnt make a difference here

var person = {
    firstName: 'Ellie',
    sayHi: function() {
        return "Hi " + this.firstName;
    },
    determineContext: function() {
        return this === person;
    }
}

// console.log(person.sayHi());
// console.log(person.determineContext());

// What will the keyword this refer to in this example
// The keyword this in this example refers to the global object because the keyword this is defined when
// a function is invoked. Since there is function here being run to create a new value of the keyword this
// the value of the keyword this will still be the global object
var person = {
    firstName: 'Elie',
    determineContext: this
}
console.log(person.firstName)
console.log(person.determineContext)

// What happens with nested objects
var person = {
    firstName: 'Colt',
    sayHi: function() {
        return 'Hi ' + this.firstName;
    },
    dog: {
        sayHello: function() {
            return "Hello " + this.firstName;
        },
        determineContext: function() {
            return this === person;
        }
    }
}
console.log(person.sayHi())
console.log(person.dog.sayHello())
console.log(person.dog.determineContext())

// =============
// Rules
// =============
// 1. If the keyword this is not inside of a declared object it will be the global object
// 2. However in the example of above we see that the keyword this is declared inside of an object
// called person so here come the next rule
// 3. Implicit binding states that the value of they keyword this will always be the closest parent obejct
// This is why the say hello method will return hello undefined because the keyword this is closest to the dog object
// and there is no method firstName property in the dog object