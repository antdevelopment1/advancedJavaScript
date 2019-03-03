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

// Basic Promise With Error Handeling and Success Case
var success = new Promise((res, rej) => {
    randomNum = Math.floor(Math.random() * 5);
    if (randomNum > 1) {
        res("This was a successful promise");
    } else {
        rej("This was not a successful case");
    }
});

success.then((data) => {
    console.log(data);
}).catch((data) => {
    console.log(data);
})