'use strict';

const box = document.getElementById('box');

console.log(box);

// Старые методы получения элементов из DOM
// Поиск по id объекта
const buttons = document.getElementsByTagName('button');
// const buttons = document.getElementsByTagName('button')[1];
console.log(buttons[1]);

// Поиск по классу объекта
const circles = document.getElementsByClassName('circle');
console.log(circles);


// Новые методы получения элементов из DOM
const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

// Вернет самый первый елемент на странице с этим классом
// const oneHeart = document.querySelector('.heart');
const oneHeart = document.querySelector('div');
console.log(oneHeart);
