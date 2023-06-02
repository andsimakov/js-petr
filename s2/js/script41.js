'use strict';

// Какое будет выведено значение:
let x = 5; console.log(x++);
// 5 потому как постфикс возвращает сначала старое значение, а потом увеличит, ++x вернет 6 сразу

//Чему равно такое выражение:
[] + false - null + true;
// NaN
// [] (пустой массив) в таких операциях будет приведен к строковому типу данных
// Соответственно, false здесь станет просто срокой из-за динамической типизации
// Строка - null = NaN (значение, что получается при выполнении нематематических операций)
// NaN + true = NaN

// Что выведет этот код:
let y = 1; let x = y = 2; console.log(x);
// 2
// присваивание по значению справа налево

// Чему равна сумма:
[] + 1 + 2;
// [] + 1 + 2
// [] как строка в таких операциях
// последовательно сделает из 1 и 2 строки и сконкатенирует их

// Что выведет этот код:
'1'[0];
// '1'
// нулевой (и единственный тут элемент строки)

// Чему равно:
2 && 1 && null && 0 && undefined;
// null
// первая ложь в "И" слева направо
// "И" останавливается на true
// "ИЛИ" останавливается на false

// Есть ли разница между выражениями:
!!(a && b) и a && b;
// !!(1 && 2) === (1 && 2);
// false
// Есть, так как левое станет boolean из-за !! и динамич. типизации,
// что не будет равно по значению правому

// Что выведет этот код:
null || 2 && 3 || 4;
// 3: 2 && 3 = 3, null || 3 = 3, 3 || 4 = 3
// последняя правда в "ИЛИ" слева направо, && выше по приторитету, чем ||
// "И" останавливается на true
// "ИЛИ" останавливается на false

// Правда ли что a == b:
const a = [1, 2, 3], b = [1, 2, 3];
// false
// Потому что это две различные переменные с одинаковыми данными (как в Python по id)

// Что выведет этот код:
+'Infinity';
// Infinity
// Унарный "+" сделает из string number

// Верно ли сравнение:
'Ёжик' > 'яблоко';
// Нет, так как заглавная Йо меньше строчной я

// Чему равно:
0 || '' || 2 || undefined || true || falsе;
// 2
// последняя правда в "ИЛИ"
// "И" останавливается на true
// "ИЛИ" останавливается на false