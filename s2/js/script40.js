'use strict';

// let number = 5; debugger;

// function logNumber() {
//     // let number = 4; debugger;
//     console.log(number); debugger;
// }

// number = 6;

// logNumber(); // 6

// number = 8;

// logNumber(); // 6


function createCounter() {
    let counter = 0;

    const myFunction = function () { debugger;
        counter = counter + 1; debugger;
        return counter; debugger;
    };

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

// Каждый раз изменяется значение переменной counter, на которую стоит ссылка в функции
console.log(c1, c2, c3);  // 1 2 3


{
    let msg = 'Hello';
}

// msg здесь во внутреннем окружении блока, недоступном из внешнего лексического окружения модуля
console.log(msg);

// Внешний цикл не может полуить доступ к num во внутреннем цикле
for (let i = 0; i <9; i++) {
    for (let j = 0; j < 9; j++) {
        let num = 3;
    }
    console.log(num);
}
