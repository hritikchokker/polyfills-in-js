
function arrayMapPolyfill(arr = [], func) {
    ;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

function arrayMap(arr = [], func) {
    if (!Array.prototype.map) {
        return arrayMapPolyfill(arr, func);
    } else {
        return arr.map(func);
    }
}
const arr = [2, 4, 6, 8, 10, 12, 14];
const mapData = (el) => el * 2;
console.log('this will multiply every element of array by 2', arrayMap(arr, mapData));

const dummList = [
    { name: 'Bruce Wayne', alias: 'Batman' },
    { name: 'Clark Kent', alias: 'Superman' },
    { name: 'barry allen', alias: 'flash' },
    { name: 'Oliver Queen', alias: 'Green Arrow' }
]
const modifyDummyList = (el) => ({ ...el, isSuperhero: true });
console.log('this will modify superhero list', arrayMap(dummList, modifyDummyList));
