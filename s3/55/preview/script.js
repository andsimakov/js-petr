'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

// boxesQuery.forEach(box => {
//     // if (box.matches('.this')) console.log('This one!');
//     if (box.matches('.this')) console.log(box);
// });

// Получим ближайший родительский класс, содержащий боксы
console.log(boxesQuery[0].closest('.wrapper'));

// Статична на момент получения - ничего не удалит
// boxesQuery[0].remove();

// Отслеживает изменения в DOM дереве
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);

//     // Так добавить элемент в HTMLCollection нельзя
//     boxesGet[boxesGet.length] = div;
// }

// Вернет NodeList - полезнее
// console.log(boxesQuery);
// Вернет HTMLCollection
// console.log(boxesGet); // тут получили живую коллекцию после удаления элемента

// Получить всех детей body
// console.log(document.body.children);

// console.log(Array.from(boxesGet)); // образуется обычный статичный массив

