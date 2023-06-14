'use strict';

// const arr = [1, 1, 2, 2, 4, 5, 6, 5];
const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

// Функция фильтрации массива от дубликатов
function unique(arr) {
    return Array.from(new Set(arr));
}
console.log(unique(arr));

// const set = new Set(arr);

// set.add('John');
// set.add('Oleg'); // Уже существует и не буде добавлен
// Команда set в конце возвращает сам набор, потому можно добавлять цепочкой

// console.log(set);

// Базовые команды
// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// Переборы
// for (let value of set) console.log(value);

// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain);
// });

// console.log(set.values());
// console.log(set.keys()); // Результат, аналогичный предыдущей команде
// console.log(set.entries());


