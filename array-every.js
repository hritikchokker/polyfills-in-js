
function arrayEveryPolyfill(arr = [], func) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            count += 1
        }
    }
    return count === arr.length;
}

function arrayEvery(arr = [], func) {
    if (!Array.prototype.some) {
        return arrayEveryPolyfill(arr, func);
    } else {
        return arr.every(func);
    }
}

const arr = [2, 4, 6, 8, 10];
// const arr = [1, 2, 3, 4, 5];
const condifionFunc = (el) => el % 2 == 0;

const lesserThanArr = [12, 43, 322, 33, 232, 233, 212];
const lesserThan10Checker = (el) => el >= 10;
console.log('is every element in array multiple of 2 => ', arrayEvery(arr, condifionFunc));

console.log('is every elements in array lesser or equal to 10 =>', arrayEvery(lesserThanArr, lesserThan10Checker));
