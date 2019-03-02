function findIndex(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let indexValue = callback(arr[i], i, arr);
        if (indexValue !== -1) {
            newArr.push(indexValue);
        } 
    }
    return newArr;
}

function indexFound(number, index, array) {
    if (array.indexOf(number) !== -1 ) {
        return index;
    }
    return -1;
}

console.log(findIndex([1,2,3,4,5], indexFound));