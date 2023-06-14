'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: () => {
        console.log(`${this.name} ${this.surname}`);
    }
};
// console.log(user);

// Сделать карту их объекта
const userMap = new Map(Object.entries(user));
// console.log(userMap);

// Создание реального объекта из массивоподобного объекта
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

// const shops = [
//     {rice: 500},
//     {oil: 200},
//     {bread: 50}
// ];

// const budget = [5000, 15000, 25000];

// const map  = new Map([
//     [{paper: 400}, 8000] // передаем начальное значение
// ]);

// shops.forEach((shop, i) => {
//     map.set(shop, budget[i]);
// });

// map.set(shops[0], 5000);

// // Создание цепочкой
// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);

// console.log(map);

// Взять элемент карты
// console.log(map.get(shops[0]));

// Проверить наличие в карте
// console.log(map.has(shops[0]));

// map.delete(key);
// map.clear();
// map.size;

// map.keys();

// console.log(map.keys());
// for (let shop of map.keys()) {
//     console.log(shop);
// }

// const goods = [];

// ------------ Способы перебора карт ------------

// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let price of map.values()) {
//     console.log(price);
// }

// for (let price of map.entries()) {
//     console.log(price);
// }

// for (let [shop, price] of map.entries()) {
//     console.log([price, shop]);
// }

// map.forEach((value, key, map) => {
//     console.log(key, value);
// });
// --------------------------------------------
