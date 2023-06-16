'use strict';

// const bigInt = 122434235345346456547567867868n;
// или
// const sameBigInt = BigInt(122434235345346456547567867868);

// console.log(typeof(bigInt));

// Нельзя использовать Math
// console.log(Math.round(5n));

// Нельзя смешивать типы
// console.log(5n + 1);

console.log(1n + 2n); // 3n

console.log(5n / 2n); // 2n - деление всегда вернет округленное значение

console.log(2n > 1n); // true

console.log(2n > 1); // true - это норм
console.log(2n > 5); // false - это норм

console.log(2n == 2); // true - это норм при нестрогом сравнении
console.log(2n === 2); // false - это норм при строгом сравнении, так как разные типы

let bigInt = 1n;
let number = 2;
// Нужно конвертировать обычное число для сложения
console.log(bigInt + BigInt(number)); // 3n
// И наоборот
console.log(Number(bigInt) + number); // 3

// Унарный плюс с bigInt для приведения типа не работает
// console.log(+bigInt + number);
