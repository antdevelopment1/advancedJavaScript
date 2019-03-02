// Heap Definition

// An area in memory where your data is stored
var obj = {
    first: "April",
    last: "Copes"
}

// In this instance new data is not created on the heap when we assign the create 
// object to the newObj variable only a copy is made
var newObj = obj;


// Stack Example
function uppercaseFirst(word) {
    return word[0].toUpperCase() + word.slice(1);
}
function upperCaseWords(sentence) {
    var words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = uppercaseFirst(words[i]);
    }
    return words.join('');
}
console.log(upperCaseWords("this word is totally uppercased"));