'use strict';

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: () => {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

// for (const key in user) {
//     console.log(user[key]);
// }
// for (const key of user) {
//     console.log();
// }

// const arr = ['b', 'a', 'c'];
// Array.prototype.someMethod = function() {};

// console.dir(arr);

// for (const key in arr) {
//     console.log(arr[key]);
// }
// for (const key of arr) {
//     // console.log(arr[key]); // здесь уже возвращаются сразу значения, потому нужно просто key
//     console.log(key);
// }

// const str = 'string';
// for (const key in str) {
//     console.log(str[key]);
// }


const salaries = {
    john: 500,
    jan: 1000,
    ann: 5000,
    sayHello: () => {console.log('Hello');}

};

// Определение итератора для объекта выше
salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,
        next() {
            if (this.current < this.last) {
                this.current += 500;
                return {done: false, value: this.current};
            } else {
                return {done: true};
            }
        }
    };
};


// for (let res of salaries) {
//     console.log(res);
// }

// Как альтернатива коду выше, ручной вызов next
const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
