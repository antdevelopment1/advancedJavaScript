// Timer: 2
// Timer: 1
// Ring Ring Ring!!!
// The function will accept 1 parameter which is a time in seconds for the count down. 
//  The function should console.log the time remaining every second.  Once the timer 
//  gets to 0, the timer should be stopped and you should console.log "Ring Ring Ring!!!".
function countDown(countFrom) {
    var interval = setInterval(function(){
        countFrom--;
        if (countFrom > 0) {
            console.log('Timer:',countFrom);
        } else {
            console.log('Ring Ring Ring!!!');
            clearInterval(interval);
        }   
    }, 1000)
}

// console.log(countDown(10))


// Set Timeout Example
function first() {
    setTimeout(function() {
        console.log('I should come first but my timer is higher than the second function so I will get cut in line');
    }, 1000)
}
console.log(first())

function second() {
    setTimeout(() => {
        console.log("But Im actually going to come first even though I'm second because my delay will put me on the queue first. Haha");
    }, 500);
}
console.log(second())