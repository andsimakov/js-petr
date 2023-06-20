'use strict';

const now = new Date();

// Сеттеры
// console.log(now.setHours(18));
console.log(now.setHours(18, 40)); // Можно тут и минуты передать
console.log(now);

// const now = new Date('2023-06-20');
// const now = new Date('2023-06-20T17:50:11.234Z');
// const now = new Date (2023, 6, 20, 17);
// const now = new Date (0); // 1970-01-01T00:00:00.000Z
// const now = new Date (-999999999);

// console.log(now);

// Геттери
// console.log(now.getFullYear()); // 2023
// console.log(now.getMonth());
// console.log(now.getDate());

// console.log(now.getDay());

// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset()); // от UTC
// console.log(now.getTime()); // секунд от 1970-01-01

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Done in ${end - start} ms`);
