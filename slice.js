// Trying to recreate a slice method
function sliceMethod(start, end) {

    let arr = [1,2,3,4,5];
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (end === undefined) {
            end = arr.length;
        }
        for (let j = start; j < end; j++) {
            if (newArr.indexOf(arr[j]) === -1) {
                newArr.push(arr[j]);
            }
        }
    }
    return newArr;
}

console.log(sliceMethod(1,3))