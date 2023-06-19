'use strict';

const btn = document.querySelector('.btn');

// Создали глобальную переменную, чтобы задать значение внутри обработчика событий
// и деактивировать таймер вне его (область видимости)
let timerId,
    i = 0;


function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left =  pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

// Запуск функции или операции через промежуток времени
// const timerID = setTimeout((text) => {
//     console.log(text);
// }, 2000, 'Hello');

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// Помещаем в переменную, чтобы иметь идентификатор таймера
// const timerId = setTimeout(logger, 2000);

// и потом, если нужно, то сбросить таймер по нему
// clearInterval(timerId);

// или
// setTimeout(logger, 2000);


// Рекурсивный вызов setTimeout
// let id = setTimeout( function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);



