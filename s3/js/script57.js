'use strict';

const birthday = Symbol('birthday'); // Символ

const user = {
    name: 'Alex',
    surname: 'Smith',
    // birthday: '20/04/1993',
    [birthday]: '20/04/2021', // ссылка на символ
    showMyPublicData: () => {
        console.log(`${this.name} ${this.surname}`);
    }
};

// writable - с true свойства в объекте можно будет изменить
// enumerable - с true свойства будут пречисляться в циклах
// configurable - с true свойство можно будет удалить, а атрибуты изменить

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.defineProperty(user, 'name', {writable: false}); // запретили писать в свойство объекта
// user.name = 'sfjsdsf';

// Object.defineProperty(user, 'gender', {value: 'male'});

// При создании свойства вручную как здесь все флаги стоят в false
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// Object.defineProperty(user, 'birthday', {writable: false});
// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));
// user.birthday = '323223';


// Исключить метод showMyPublicData из перечисления в цикле
// Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
for (let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptor(user, birthday));

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// Изменение нескольких флагов объекта сразу
// Object.defineProperties(user, {
//     name: {writable: false},
//     surname: {writable: false}
// });

