'use strict';

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// Устаревшее
// console.log(btns[0].className);

// Современное
// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(1));

// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.add('red', 'some-new-class'));

// console.log(btns[0].classList.remove('blue'));

// Переключение: добавит удаленный или удалит добавленный
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});

// Работает и с toggle, но иногда нужно так как выше
// btns[0].addEventListener('click', () => {
//     btns[1].classList.toggle('red');
// });

// Навешивание обработчика перебором, не делегированием
// В итоге динамически созданная кнопка не имеет этого события
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

// Делегирование события с родителя на его потомки по условию
wrapper.addEventListener('click', (e) => {
    // console.dir(e.target);
    if (e.target && e.target.classList.contains('blue')) {
    // if (e.target && e.target.tagName == 'BUTTON') {
    // if (e.target && e.target.matches('button.red')) {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
