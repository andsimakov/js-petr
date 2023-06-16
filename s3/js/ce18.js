'use strict';

/*
Панграмма — это предложение, в котором каждая буква алфавита встречается хотя
бы по одному разу по возможности без повторений.
Например, предложение «The quick brown fox jumps over the lazy dog»
является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z
(регистр значения не имеет).

Напишите функцию isPangram, которая принимает в себя строку
и возвращает логическое значение.
Если строка является панграммой - вернется true, если нет - false.

Пример:

isPangram(«The quick brown fox jumps over the lazy dog») => true

isPangram(«Hello world») => false

*/

function isPangram(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const subSet = new Set(string.toLowerCase().replace(/\s/g, '').split('').sort());
    return Array.from(subSet).join('') == alphabet;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello world'));
