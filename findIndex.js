
function findIndexPolyfill(arr = [], func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return i + 1
        }
    }
    return -1;
}

function arraryFindIndex(arr = [], func) {
    if (!Array.prototype.findIndex) {
        return findIndexPolyfill(arr, func);
    } else {
        return arr.findIndex(func);
    }
}
const arr = [1, 2, 4, 5, 6, 7, 8];
const findIndexFunc = function (el) {
    if (el === 50) {
        return true;
    } else {
        return false;
    }
}
// this will findIndex of 2
console.log(arraryFindIndex(arr, findIndexFunc));