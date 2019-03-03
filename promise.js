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

// Basic Promise With Set Timeout Example
var random = new Promise((res, rej) => {
    setTimeout(() => {
        let result = Math.floor(Math.random() * 11);
        res(result);
    }, 4000)
});

random.then((data) => {
    console.log(data);
}).catch(() => {
    console.log("Unable to recover the random number");
})

// Combining Asynchronous tasks inside of a promise
// Mixing arrow syntax with traditional functions
var promise = new Promise((res, rej) => {
    setTimeout(function() {
        randomNum = Math.floor(Math.random() * 11);
        res(randomNum);
    }, 3000);
});
promise.then((data) => {
    console.log("Random number: " + data);
    return new Promise((res, rej) => {
        setTimeout(function() {
            let word = 'Awesome';
            res(word);
        },1000);
    }).then((data) => {
        console.log(data)
    }).catch(() => {
        console.log("There was an error inside the promise chain");
    })
});
