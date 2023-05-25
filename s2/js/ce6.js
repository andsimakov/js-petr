'use strict';

/* Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!".
В решении вызывать функцию не нужно, программа сделает это за вас.
P.S. возвращать - это использовать ключевое слово return. */
function sayHello(name) {
    return `Привет, ${name}!`;
}

console.log(sayHello('Alex'));


/* Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел:
// одно на 1 меньше, сам аргумент, и число на 1 больше.
Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6]. */
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(2));


/* Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
Первое число - это база, второе число - это сколько раз нужно будет повторить
это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку
(или число в особых случаях, о которых ниже), где эти числа идут по порядку,
разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля -
то возвращать просто первый аргумент. (Проверяем через оператор typeof)

Примеры:
Вызов функции getMathResult(5, 3) даст ответ 5---10---15
Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
Вызов функции getMathResult(10, '5') даст ответ 10
Вызов функции getMathResult(10, 0) даст ответ 10
Вызов функции getMathResult(20, -5) даст ответ 20 */
function getMathResult(num, numRepeat) {
    if (typeof numRepeat != 'number' || numRepeat <= 0){
        return num;
    } else {
        let progressionStr = num;
        let lastProgressionNum = num;
        for (let i = 0; i < numRepeat - 1; i++) {
            lastProgressionNum = lastProgressionNum + num;
            progressionStr = progressionStr + '---' + lastProgressionNum;
        }
        return progressionStr;
    }
}

console.log(getMathResult(10, 5));
console.log(getMathResult(5, 3));
console.log(getMathResult(3, 10));
console.log(getMathResult(3, 0));
console.log(getMathResult(3, -1));