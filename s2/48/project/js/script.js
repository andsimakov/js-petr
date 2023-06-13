/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            'Логан',
            'Лига справедливости',
            'Ла-ла лэнд',
            'Одержимость',
            'Скотт Пилигрим против...'
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),  // все
        poster = document.querySelector('.promo__bg'),
        genres = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', () => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        // Проверка не пустое ли поле ввода, чтобы не создавать пустые элементы в списке
        if (newFilm) {

            // 2. Урезаем длину строки до 21 символа
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}&hellip;`;
            }

            // 4. Вывовдим в консоль сообщение при отмеченном чекбоксе
            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }
        // Очистить форму после ввода
        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genres.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArray = (arr) => {
        arr.sort();
    };

    sortArray(movieDB.movies);

    function createMovieList (films, parent) {
        parent.innerHTML = ''; // удалили содержимое блока
        sortArray(films);

        // Формируем новый список с той же структурой HTML, как и в исходнике
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        // 3. Удаление фильма из списка при клике на корзину
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                // Вызываем рекурсивно для перерисовки номеров строк
                createMovieList(films, parent);
            });
        });
    }

    makeChanges();
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);
});
