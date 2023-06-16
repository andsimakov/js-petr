'use strict';

window.addEventListener('DOMContentLoaded', () => {
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
});
