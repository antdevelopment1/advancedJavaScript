// ===========
// Callbacks
// ===========

// What is a higher order function
// A higher order function is a function that accepts a function as a paramter also
// known as a callback

// Poor example of duplicated code
function sendMessageConsole(mesaage) {
    console.log(mesaage);
}

function sendMessageAlert(mesaage) {
    alert(mesaage);
}

function sendMessageConfirm(mesaage) {
    return confirm(mesaage);
}

sendMessageAlert("Lot's of duplication");


// Refactored with callbacks
// Send message is a higher order function
function sendMessage(message, callback) {
    return callback(message);
}

sendMessage('hey how are you', console.log);
sendMessage('hey how are you as well', alert);
var answer = sendMessage('howdy doodie to you', confirm);

// Callbacks with function declarations
function greet(name, formatter) {
    return "Hello " + formatter(name);
}

function upperCaseName(name) {
    return name.toUpperCase();
}

console.log(greet("April", upperCaseName));

// Callbacks with annonymous functions
function greet(name, formatter) {
    return "Hello " + formatter(name);
}

console.log(greet("Tim", function(name) {
    return name.toUpperCase();
}));

console.log(greet("Tony", (name) => {
    return name.toLowerCase();
}));

