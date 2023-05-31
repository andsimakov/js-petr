'use strict';

// To String
// 1) Редкий способ преобразования типов, почти не используется
console.log(typeof(String(null)));
console.log(String(null));
console.log(typeof(String(4)));

// 2) Конкатенация
console.log(typeof(5 + '')); // Число стало строкой
console.log(typeof(null + ''));

console.log(typeof(10 + '3'));
console.log(10 + '3'); // Знаменитая хрень = '103'

const num = 5;
console.log('https://fb.com/posts/' + num);

const fontSize = 26 + 'px'; // Еще один пример динамической типизации, получим строку


// To Number
// 1)
console.log(typeof(Number('4'))); // Тоже редко

// 2) Унарным плюсом
console.log(typeof(+'5'));

// 3) через parseInt
console.log(typeof(parseInt('15px', 10)));


let answer = +prompt('Hello', ''); // префиксный унарный плюс


// To boolean
// 0, '', null, undefined, NaN -> False
// остальное -> True
// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof((!!'444')));
