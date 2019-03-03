// Basic Promise Example Without Error Handeling
var promise1 = new Promise(function(res, rej) {
    res([1,2,3,4,5]);
});

promise1.then(function(data) {
    console.log(data);
})

// Basic Promise With Error Handeling
var errorPromise = new Promise((res, rej) => {
    rej('Error');
})

errorPromise.then((data) => {
    console.log(data);
}).catch((data) => {
    console.log(data)
})