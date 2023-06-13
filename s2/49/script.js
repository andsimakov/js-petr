'use strict';

// touchstart - касание пальцем элемента
// touchmove — каждый раз при смещении пальца по элементу
// touchend - палец убран с элемента
// touchenter - когда ведем пальцем по экрану и наскакиваем на элемент, на который повешено это событие
// touchleave - палец ушел за пределы элемента
// touchcancel - точка соприкосновения больше не регистрируется на поверхности (ушли пальцем их браузера)

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        // console.log(e.touches);
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('End');
    // });
});

// touches - список всех пальцев, которые сейчас касаются экрана
// targetTouches - список всех пальцев, которые сейчас взаиммодействуют с элементом
// changedTouches - список пальцев, которые участвуют в текущем событии
