'use strict';

// console.log('arr' + ' - object');
// console.log(4 + ' - object');
// console.log(4 + +' - object'); // NaN
// console.log(4 + +'5'); // 9 -

let incr = 10,
    decr = 10;

// incr++; // постфиксный оператор инкремента
// decr--; // постфиксный оператор декремента

// console.log(incr, decr);

// ++incr; // префиксный оператор инкремента
// --decr; // префиксный оператор декремента

// console.log(incr++); // 10
// console.log(decr++); // 10

console.log(++incr); // 11
console.log(--decr); // 9

console.log(5 % 2);

console.log(2 * 4 == '8'); // Нестрогое равенство, сравнению по значению, не по типу данных
console.log(2 * 4 === '8'); // Строгое равенство, сравнению по типу данных

const isChecked = false,
    isClose = false;

// console.log(isChecked && isClose); // Логическое И / AND
// console.log(isChecked || isClose); // Логическое ИЛИ / OR
console.log(isChecked || !isClose); // Отрицание НЕ / NOT

// console.log(2 + 2 * 2 === 8);

// console.log(2 + 2 * 2 != 8);
// console.log(2 + 2 * 2 !== 8);

console.log(2 + 2 * 2 != '6'); // false - нестрого сравнивает 6 и '6'
console.log(2 + 2 * 2 !== '6'); // true - сравнивает число со строкой
