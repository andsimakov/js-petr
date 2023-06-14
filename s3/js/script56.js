'use strict';

// const obj = {
//     name: 'test'
// };


// Создание символа
// let id = Symbol('id');
// let id2 = Symbol('id');

// Каждый символ уникален
// console.log(id == id2); // false

// obj[id] = 1;

// console.log(obj);
// console.log(obj[id]);

// let id = Symbol('id');

// Еще вариант создания символа
// const obj = {
//     name: 'test',
//     [Symbol('id')]: 1, // как приватное скрытое свойство
//     // [id]: 1, // ссылка на символ выше
//     getId: () => {
//         return this[id];
//     }
// };

// console.log(obj);
// console.log(obj['id']); // undefined, не можем так обратиться к символу

// console.log(Object.getOwnPropertySymbols(obj));
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// for (let value in obj) console.log(value); // здесь символ не выведется

const myAwesomeDB = {
    movies: [],
    actors: [],
    // id: 123, // уникальный идентификатор
    // [Symbol('id')]: 123 // символ для уникальности вместо предыдущего свойства
    [Symbol.for('id')]: 123 // глобальный реестр символов, лишение уникальности
};

// Перезапись уникального id, как избежать? - Использовать символ
// myAwesomeDB.id = '323232332';

// console.log(myAwesomeDB['id']);
console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB);
