// filter function
const filterFn = function (arr = [], cb) {
    const filterArr = [];
    for (let i of arr) {
        //calling callback function passed in function
        filterArr.push(cb(i));
    }
    return filterArr;
}

function filterArray(arr = [], cb) {
    if (!Array.prototype.filter) {
        return Array.prototype.filter = filterFn(arr, cb);
    } else {
        return arr.filter(cb);
    }
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const mapperFunc = (element => element.length > 5);
// console.log(words.filter())
console.log(filterArray(words, mapperFunc))

const arrayPrime = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const primeFinder = function (el) {
    for (let i = 2; el > i; i++) {
        if (el % i === 0) {
            return false;
        }
    }
    return el > 1
}

console.log(filterArray(arrayPrime, primeFinder));


