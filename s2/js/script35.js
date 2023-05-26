'use strict';

let a = 5,
    b = a;

// Передача по значению
b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// Передача по ссылке (как в Python)
// const copy = obj;

// copy.a = 10;
// console.log(copy);
// console.log(obj);

// Копирование поэлементно в цикле
// function copy(mainObj) {
//     let objCopy = {};
//     let key;

//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);
// Но нормально не сработает со вложенным объектом (shallow copy)

const add = {
    d: 17,
    e: 20
};

// Два объекта соединятся
// console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 20;

// console.log(add);
// console.log(clone);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'asdasdad';
console.log(newArray);
console.log(oldArray);


// Spread (как unpack в Python)
const video = ['youtube', 'vimeo', 'katsaptube'],
    blogs = ['wordpress', 'blogpost', 'blogger'],
    internet = [...video, ...blogs, 'facebook', 'instagram'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

// Spread (как unpack в Python)
log(...num);


const array = ['a', 'b'];
const newArray2 = [...array];

// Копирование объекта через Spread
const q = {
    one: 1,
    two: 2
};
const newObj = {...q};
console.log(newObj);
console.log(q);
