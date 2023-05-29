'use strict';

// let str = 'some';
// let strObj = new String(str); // Не совсем ухороший способ создавать строку

// console.log(typeof(str));
// console.log(typeof(strObj));


// console.dir([1, 2, 3]); // см в браузере


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

// const john = {
//     health: 100
// };

// Устаревший формат записи (deprecated)
// Установили прототипом Джона солдата
// john.__proto__ = soldier;
// console.log(john.armor);
// john.sayHello();


// Современная запись
// Аналогично записи с __proto__. john - объект, который унаследовать, soldier - от кого унаследовать
// Object.setPrototypeOf(john, soldier);
// john.sayHello();

const john = Object.create(soldier);
john.sayHello();
