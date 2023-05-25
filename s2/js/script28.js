'use strict';

const str = 'test';
const arr = [1, 2, 4];

console.log(str.length);
console.log(arr.length);

console.dir(Number);

console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); // Выведет с какого индекса начинается искомая подстрока
console.log(fruit.indexOf('q')); // Вернет -1, так как такая подстрока отсутствует

const logg = 'Hello world';
// console.log(logg.slice(6, 11));
// console.log(logg.slice(3, 9));
// console.log(logg.slice(6));
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));


// Числа
const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));
