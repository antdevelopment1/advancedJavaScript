// Example of forEach using all parameters
var strings = ['I', 'love', 'puppies'];
var result = '';

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);  
    }
   return result;
};

function doWork(word, index, array) {
    if (array.length - 1 !== index) {
        return result += word + " ";
    } else {
        return result += word + '!!!';
    } 
};

console.log(forEach(strings, doWork));