// Basic Promise Example Without Error Handeling
var promise1 = new Promise(function(res, rej) {
    res([1,2,3,4,5]);
});

promise1.then(function(data) {
    console.log(data);
})