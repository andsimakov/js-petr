// function func() {
//     // Вызвали переменную без объявления. Без 'use strict' это сработает
//     // фактически это аналог window.smth, но это глобальная перменная,
//     // и она не может быть удалена сборщиком мусора
//     smth = 'string';
// }

// // Ссылка на данные
// const someRes = getData();

// // Ссылка на переменную
// const node = document.querySelector('.class');

// // Потенциально ненужный таймер, который будет держать переменную
// setInterval(() => {
//     if (node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);


// // С замыканими можно получить утечку памяти
// function outer() {
//     const potentiallyHugeArray = [];
//     return function inner () {
//         potentiallyHugeArray.push('Hello');
//         console.log('Hello');
//     };
// }

// const sayHello = outer();

function createElement() {
    const div = document.createElement('div');
    div.id = 'test';
    document.body.append(testDiv);
}


createElement();

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}

deleteElement();
