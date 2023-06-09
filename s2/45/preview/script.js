'use strict';

const overlay = document.querySelector('.overlay'),
    // btn = overlay.querySelector('button'),
    btns = document.querySelectorAll('button');

// Сейчас так делать не нужно
// btn.onclick = function() {
//     alert('Click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// Можно второе и больше на то же событие подряд, встанут в очередь
// btn.addEventListener('click', () => {
//     alert('Second Click');
// });

// let i = 0;
const deleteElement = (e) => {
    // console.log(e.target);  // чаще используется это
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// Получить информацию по событию - передать его в callback фукнцию
// Объект события (e=event) здесь один аргумент, могут быть другие, но он должен быть всегда первым
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
// Событие сначала сработает на вложенном элменте и потом по иерархии на элементе выше (всплытие событий)


// Правильный способ назначать одинаковый обработчик на несколько элементов
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); // третий аргумент — опции
});


const link = document.querySelector('a');

// Переопределение стандартного поведения элемента в обработчике
// (сначала отменяем по event.preventDefault(), затем задаем новое)
link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});
