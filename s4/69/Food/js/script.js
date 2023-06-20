'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabsParent = document.querySelector('.tabheader__items'), // Получили блок заголовков табов
        tabs = tabsParent.querySelectorAll('.tabheader__item'), // Получили все заголовки табов
        tabsContent = document.querySelectorAll('.tabcontent'); // Получили все табы

    function hideTabContent() {
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }

    function showTabContent(i = 0) {
        tabs[i].classList.add('tabheader__item_active');
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
    }

    // Здесь важен порядок: сначала скрыть, потомо показать
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer
    const deadline = '2023-06-22';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        // Первоначальная инициализация таймера, чтобы не мигал при рефреше страницы
        updateClock();

        // Функция для добавения нулем до двух знаков
        function getZero(num) {
            if (num >=0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <=0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
});
