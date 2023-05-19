'use strict';

let number = 4.6;
console.log(4/0);  // Infinity
console.log(-4/0);  // -Infinity

console.log('string' * 9);  // NaN

const person = 'Alex';

const bool = true; // or false

// console.log(something); // null

let und;
console.log(und); // undefined

const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};
console.log(obj);

// console.log(obj.name);
console.log(obj['name']);

// Массив -  частный случай объекта
let arr = ['plum.png', 'orange.jpeg', 6,'apple.bmp', {}, []];
console.log(arr[1]); // с нуля
