// Trying to recreate a slice method
// function sliceMethod(start, end) {
    
//     let arr = [1,2,3,4,5];
//     let newArr = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (end === undefined) {
//             end = arr.length;
//         }
//         for (let j = start; j < end; j++) {
//             if (newArr.indexOf(arr[j]) === -1) {
//                 newArr.push(arr[j]);
//             }
//         }
//     }
//     return newArr;
// }

// // console.log(sliceMethod())

// // Trying to recreate a slice method
function sliceMethod(arr, start=0, end=arr.length) {
    
    let newArr = [];

    if (typeof arr === 'number') {
        let numberArray = arr.toString().split('');
        numberArray.forEach((number) => {
            newArr.push(Number(number));
        })
    }

    for (let i = start; i < end; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
}

function arrayFrom(arr, arrCallback) {
    return arrCallback(arr);
}

console.log(arrayFrom("string",sliceMethod));




