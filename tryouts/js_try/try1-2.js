'use strict';

var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    var choice = select.value;

    switch (choice) {
    case 'sunny':
        para.textContent = 'Сегодня хорошо и солнечно. Наденьте шорты! Идите на пляж или в парк, и купите мороженое.';
        break;
    case 'rainy':
        para.textContent = 'На улице дождь. Возьмите плащ и зонт, и не гуляйте слишком долго';
        break;
    case 'snowing':
        para.textContent = 'Идёт снег - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
        break;
    case 'overcast':
        para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
        break;
    default:
        para.textContent = '';
    }
}
