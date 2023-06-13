'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

// function changeParams(elem, h, w) {
//     elem.style.height = `${h || 200}px`;
//     elem.style.width = `${w || 200}px`;
// }

// changeParams(box, newHeight, newWidth);
// changeParams(box);

// let userName;
// let userName = null;
// let userName = 0;
// let userName = NaN;
// console.log(userName ?? 'User');

// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
// }
// changeParams(box, newHeight, newWidth);

// let userName;
// let userKey;

// // Выстраивание цепочки для получения первого реально существующего значения
// console.log(userName ?? userKey ?? 'User');


function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    // elem.innerHTML = h ?? 200 * w ?? 200; // сначала выполнится умножение
    elem.innerHTML = (h ?? 200) * (w ?? 200); // больший приоритет ?? при помощи скобок
}
changeParams(box, newHeight, newWidth);
