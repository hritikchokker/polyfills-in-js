'use strict';


function arraySomePolyfill(arr = [], func) {
    let flag = alse;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            flag = true;
        } else {
            flag = false;
        }
    }
    return flag;
}

function arraySome(arr = [], func) {
    if (!Array.prototype.some) {
        return arraySomePolyfill(arr, func);
    } else {
        return arr.some(func);
    }
}

const arr = [1, 2, 3, 4, 5];
const condifionFunc = (el) => el % 2 == 0;

const lesserThanArr = [12, 43, 322, 33, 232, 233, 212];
const lesserThan10Checker = (el) => el <= 10;
console.log('is some element in array multiple of 2 => ', arraySome(arr, condifionFunc));

console.log('is some elements in array lesser or equal to 10 =>', arraySome(lesserThanArr, lesserThan10Checker));
