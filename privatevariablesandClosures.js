// What are private variables
// A private varibale is variables that can only be accessed in a certain scope
// and not modified in a certain scope

function counter() {
    var count = 0;
    return function inner() {
        count++;
        return count;
    }
}
var counter1 = counter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
// We have two different varables that do not effect/modify each when we increment them 1 
// when we invoke the functions
var counter2 = counter();
console.log(counter2())

// More complex real world example
function petStore() {
    var pets = ['dog', 'bird', 'pigeon', 'frog'];
    return {
        getPets: function() {
            return pets;
        },
        addPets: function(pet) {
            pets.push(pet);
            return pets;
        }
    }
}

console.log(petStore().addPets('monkey'))
console.log(petStore().getPets())

// We can capture return values from a closure and save them in a variable
let addPet = petStore().addPets('monkey');
let getPets = petStore().getPets();
console.log(addPet)
console.log(getPets)

// Another example
function multiply(a, b) {
    if (arguments.length === 1) {
        return function(b) {
            return a * b;
        }
    }
    return a * b;
}

console.log(multiply(3)(3))

// Closure Guessing Game
function guessingGame(userGuess) {

    let correctAnswer = Math.floor(Math.random() * 11);
    let guesses = 0;
    let completed = false;

    return function(guess) {
        if (!completed) {
            guesses++;
            if (guess === correctAnswer) {
                completed = true;
                return 'That was the correct answer';
            } else if (guess > correctAnswer) {
                return 'You guessed to high.';
            } else if (guess < correctAnswer) {
                return 'You guessed to low.';
            } else if (guesses === guess) {
                completed = true;
                return `You have used all of you guesses. The answer was ${correctAnswer}.`;
            }
        }
    }
}

console.log(guessingGame(5)(5))
