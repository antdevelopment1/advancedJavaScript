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
            console.log(countFrom);
        } else {
            console.log('Ring Ring Ring!!!');
            clearInterval(interval);
        }   
    }, 1000)
}

console.log(countDown(10))