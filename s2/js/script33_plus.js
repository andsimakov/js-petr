'use strict';

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    console.log('pivot:', pivot);

    const less = [];
    const equal = [];
    const greater = [];

    for (let element of arr) {
        if (element < pivot) {
            less.push(element);
        } else if (element === pivot) {
            equal.push(element);
        } else {
            greater.push(element);
        }
    }

    return quickSort(less).concat(equal, quickSort(greater));
}

const unsortedArray = [7, 2, 1, 6, 8, 5, 3, 4];
console.log(quickSort(unsortedArray));
