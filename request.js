let XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    console.log('READY STATE IS...' + XHR.readyState);
    if (XHR.readyState === 4) {
        if (XHR.status === 200) {
            console.log(XHR.responseText)
        } else {
            console.log("There was a problem");
        }
    }
}

XHR.open("GET","https://dog.ceo/api/breeds/image/random");
XHR.send();
