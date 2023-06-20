'use strict';

// let user = {name: 'John'};

// // const arr = [user]; // Пока этот массив существует, объект будет храниться в памяти

// // let map = new Map();
// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// // console.log(user);
// // console.log(arr[0]);
// // console.log(map.keys());
// console.log(map.has(user)); // false - объект удален автоматически из WeakMap после user = null;

// WeakMap
// let cache = new WeakMap();

// function cacheUser(user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now());
//     }
//     return cache.get(user);
// }

// let olena = {name: 'Olena'};
// let alex = {name: 'Alex'};

// cacheUser(olena);
// cacheUser(alex);

// olena = null;
// console.log(cache.has(olena)); // При установке olena в null она удалится из WeakMap
// console.log(cache.has(alex));


// WeakSet
let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '.....', from: 'M'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);
messages.shift();
console.log(readMessages.has(messages[0]));
