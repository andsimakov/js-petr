'use strict';


/*
Создайте функцию, которая принимает в себя целое число минут и возвращает время
в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" -
оно меняется в зависимости от цифры. Если вместо аргумента приходит не число,
дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов).
Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд).
Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов).
Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:
getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
getTimeFromMinutes(-150) => "Ошибка, проверьте данные" */

function minutesToHourMinutes(minutes) {
    return {
        'hours': Math.floor(minutes / 60),
        'minutes': minutes % 60
    };
}

function defineHourPostfix(hours) {
    const hoursStr = 'час';
    const lastTwoDigits = hours % 100;
    const lastDigit = hours % 10;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return `${hoursStr}ов`;
    }

    switch (lastDigit) {
    case 1:
        return hoursStr;
    case 2:
    case 3:
    case 4:
        return `${hoursStr}а`;
    default:
        return `${hoursStr}ов`;
    }
}

function defineMinutePostfix(minutes) {
    const minutesStr = 'минут';
    const lastDigit = minutes % 10;
    const lastTwoDigits = minutes % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return minutesStr;
    }

    switch (lastDigit) {
    case 1:
        return `${minutesStr}а`;
    case 2:
    case 3:
    case 4:
        return `${minutesStr}ы`;
    default:
        return minutesStr;
    }
}

function getTimeFromMinutes(minutes) {
    if (typeof minutes != 'number' || !Number.isInteger(minutes) || minutes < 0) {
        return 'Ошибка, проверьте данные';
    }

    const hoursMinutes = minutesToHourMinutes(minutes);
    return `Это ${hoursMinutes.hours} ${defineHourPostfix(hoursMinutes.hours)} и ${hoursMinutes.minutes} ${defineMinutePostfix(hoursMinutes.minutes)}`;
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));
console.log(getTimeFromMinutes(523));


/* Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
Если один из аргументов не является числом или их меньше 4 - возвращается 0.
Дробные числа разрешены.

Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0 */

function findMaxNumber(num1, num2, num3, num4) {
    let arr = [num1, num2, num3, num4];

    const length = arr.length;
    const isCorrectArr = length == 4;
    if (!isCorrectArr) return 0;

    for (let i = 0; i < length; i++) {
        if (typeof arr[i] != 'number') {
            return 0;
        }
    }

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr[length - 1];
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(11, 5, 6.6, 1));
console.log(findMaxNumber(3, 5, 9.2, 4.1));
console.log(findMaxNumber(1, 5, '6', '10'));
