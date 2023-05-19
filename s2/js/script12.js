const arr = ['a', 'b', 'c'];

arr[10] = '3456';
console.log(arr); // [ 'a', 'b', 'c', <7 empty items>, '3456' ]

// Аналогично выше
const arrObj = {
    0: 'a',
    '1': 'b',
    2: 'c',
    abc: {
        df: [{}, {}],
        def: {

        }
    }
};

const b = 'b';

// arrObj.b = '1234';
arrObj[b] = '1234';
arrObj['c'] = '5678';

console.log(arrObj['b']);
console.log(arrObj.b);
console.log(arrObj.c);

console.log(arr[1]);
// Для обращения к ключу объекта как к цифре
console.log(arrObj[1]);

// const obj = {a: 1, b: 2};

// Можно без кавычек ключи
const obj = {
    Anna: 500,
    Alice: 800
};

