'use strict';

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт');
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты');
// } else {
//     console.log('Мы уходим');
// }


// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'msdbfhmdsbfm');
// console.log(1 || 5);

const hamburger = 3;
const fries = 0;
const cola = 0;

console.log(hamburger || cola || fries);

if (hamburger || cola || fries) {
    console.log('Довольны');
} else {
    console.log('Мы уходим');
}


let johnREport, alexREport, samReport, mariaReport = 'done';
console.log(johnREport || alexREport || samReport || mariaReport);


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Довольны');
} else {
    console.log('Мы уходим');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);


console.log(!0); // true
