'use strict';

/*
У вас есть список учеников, которые хотят поиграть в игру:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups,
которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту.
Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

Пример:

sortStudentsByGroups(students)  =>

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили.
 Просто распишите логику действий строка за строкой.
*/

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let resultArr = [];
    let sortedArr = arr.sort();

    for (let i = 0; i < sortedArr.length - (sortedArr.length % 3); i++){
        resultArr.push(sortedArr.splice(0, 3));
    }
    if (sortedArr.length > 0) {
        resultArr.push(`Оставшиеся студенты: ${sortedArr.join(', ')}`);
    } else {
        resultArr.push('Оставшиеся студенты: -');
    }

    return resultArr;
}

console.log(sortStudentsByGroups(students));
