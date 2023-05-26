'use strict';

/*
У вас есть готовый объект с данными. Разработчик Х хочет написать часть функционала,
но ему не хватает навыков. Выполните часть заданий за него.
*/
const personalPlanPeter = {
    name: 'Peter',
    age: '29',
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const languages = plan.skills.languages.join(' ').toUpperCase();
        return `Мне ${plan.age} и я владею языками: ${languages}`;
    }
};

Object.defineProperties(personalPlanPeter, );

/*
Напишите функцию showExperience, которая будет принимать в себя объект
со всеми данными и возвращать строку с опытом.

Пример:
showExperience(personalPlanPeter) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно
*/
function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}
console.log(showExperience(personalPlanPeter));


/*
Напишите функцию showProgrammingLangs, которая будет принимать в себя объект
со всеми данными и возвращать строку в нужном виде.

Пример:
showProgrammingLangs(personalPlanPeter)  =>
"Язык js изучен на 20% Язык php изучен на 10%"

Причем функция должна работать вне зависимости от количества языков.
Если ни один не указан, то возвращается пустая строка.

P.S. Для переноса строки используется \n в конце строки.
*/
function showProgrammingLangs(plan) {
    let result = '';
    const programmingLanguages = plan.skills.programmingLangs;
    for (let key in programmingLanguages) {
        result = result + `Язык ${key} изучен на ${programmingLanguages[key]}\n`;
    }

    return result;
}
console.log(showProgrammingLangs(personalPlanPeter));


/*
Создайте метод showAgeAndLangs внутри объекта personalPlanPeter.
При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:
personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта,
а языки всегда в верхнем регистре (большими буквами).
Если данные в объекте поменяются, то и сообщение тоже изменится.
*/
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
