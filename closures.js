// What is a closure
// A closure occurs when an inner function makes use of variables declared inside
// an outer function that has already returned

function outterFunction() {
    var start = "A closer is";

    return function innerFunction() {
        return start + " Awesome";
    }
}

console.log(outterFunction()())

// Holy crap what just happened was so cool


function innerFunc(a) {

    return function outerFunc(b) {
        return a + b;
    }
}

console.log(innerFunc(10)(20))