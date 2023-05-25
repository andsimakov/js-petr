'use strict';

/*
Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число.
Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи.
Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

Пример:
fib(4) => ''0 1 1 2"
fib(7) => ''0 1 1 2 3 5 8"
fib('7') => ''"
fib(1) => "0"
fib(0) => ''"
*/
function fib(num) {
    if (typeof num != 'number' || num === 0) return '';
    if (num === 1) return '0';

    let fibSequence = '0 1';
    if (num === 2) return fibSequence;

    let fib1 = 0;
    let fib2 = 1;

    for (let i = 3; i <= num; i++) {
        const nextFib = fib1 + fib2;
        fibSequence += ' ' + nextFib;
        fib1 = fib2;
        fib2 = nextFib;
    }

    console.log(typeof fibSequence);
    return fibSequence;
}

console.log(fib(4));
console.log(fib(7));
console.log(fib('7'));
console.log(fib(1));
console.log(fib(0));
console.log(fib(5));
