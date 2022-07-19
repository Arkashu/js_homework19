'use strict'
const arr = [1, 2, 3, -1, -2, -3];
const newPositiveArr = function (arg){
    let exampleArr = [];
    if (arg.length === 0) return 'error empty array';
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] >= 0){
            exampleArr.push(arg[i])
        }
    }
    if (exampleArr.length > 0) return exampleArr;
    else return null;
}
console.log(newPositiveArr(arr))