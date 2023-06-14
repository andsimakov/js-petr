'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// Ошибка тут блокирует дальнейший код
// console.log(block.textContent);

// Ловит ошибку, но неудобно
// if (block) {
//     console.log(block.textContent);
// }

// Применение оператора ?. Но это работает на чтение свойства
// Вернет undefined
console.log(block?.textContent);

// Не работает, так как пытаемся применить к undefined
// block?.textContent = '123';

// console.log(1 + 2);

const userData = {
    name: 'John',
    age: null,
    say: () => {
        console.log('Hello');
    }
};

userData.say();
// Проверка на наличие метода
userData.hey?.();

// const userData = null;

// Нет такого значения в объекте
// console.log(userData.skills.js);

// Проверка наличия этих данных, но очень громоздко
// if (userData && userData.skills && userData.skills) {
//     console.log(userData.skills.js);
// }

// Короткая современная версия
// console.log(userData.skills?.js);
// или еще глубже - проверит, существует ли вообще userData
console.log(userData?.skills?.js);
