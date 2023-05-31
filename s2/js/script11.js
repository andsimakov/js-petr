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

function hello() {
    console.log('Hello World');
}

hello();

function hi() {
    console.log('Hi!');
    debugger;
}

hi();

const arrr = [1, 14, 4, 30, 54],
    sorted = arrr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(sorted);

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
