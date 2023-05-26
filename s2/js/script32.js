'use strict';

// Обычно так не создают, но тоже можно
const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    heignt: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    // Добавление кастомного метода в объект
    makeTest: function () {
        console.log('Tesssst');
    }
};

options.makeTest();

// Деструктуризация объекта
const {border, bg} = options.colors;
console.log(border, bg);

// console.log(options.name);

// // Удаление свойства из объекта
// delete options.name;
// console.log(options);

// Итерация по ключам объекта. for in работает, for of здесь не работает
// let counter = 0;
for (let key in options) {
    // Вывод вложенных объектов
    if (typeof options[key] === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} has value ${options[key][i]}`);
        }
    } else {
        console.log(`Property ${key} has value ${options[key]}`);
    }
}

// Получаем массив со всеми ключами
console.log(Object.keys(options).length);
// ... и таким образом длину объекта
console.log(Object.keys(options));
