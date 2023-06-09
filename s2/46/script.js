'use strict';

// console.log(document.body);
// console.log(document.head);

// Получить весь <html> объект
// console.log(document.documentElement);

// Получить дочерние ноды (объекты) родительского объекта
// Невидимые переносы строк будут отображаться как нода text между другими нодами
// console.log(document.body.childNodes);


// Первый элемент в body
// console.log(document.body.firstChild); // вернет ноду text
// console.log(document.body.firstElementChild); // вернет первый элемент

// Последний элемент в body
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// Получить родительский элемент
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]'));
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// console.log(document.querySelector('#current').parentElement);

// Перебор элементов в псевдомассиве с for/of для избавления от нод #text
for (let node  of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}
