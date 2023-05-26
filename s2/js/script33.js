'use strict';

const arr = [2, 13, 26, 8, 10];
// arr.sort(); // [ 10, 13, 2, 26, 8 ] - числа принялись как строки, потому отсортировало как строки

// function compareNum(a, b) {
//     return a - b;
// }
// arr.sort(compareNum); // [ 2, 8, 10, 13, 26 ] - отсортировало как надо с помощью коллбека

console.log(arr);
// console.log(arr.length);

// Удаление последнего элемента
// arr.pop();
// console.log(arr);

// // Добавление нового последнего элемента
// arr.push(10);
// console.log(arr);

// Обычно для перебора массива используют
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside array ${arr}`);
});


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Но также можно использовать и это. Здесь можно использовать break и continue
for (const value of arr) {
    console.log(value);
}

const iterable = 'boa';
// Итерация по строке
for (let value of iterable) {
    console.log(value);
}


// Сформировать массив из строки
// const str = prompt('', '');
// const products = str.split(', ');
// // console.log(products);

// // Отсортировать элементы массива как строки
// products.sort();

// // Склеить массив в строку с разделителем
// console.log(products.join('; '));
