'use strict';

/*
Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
(тоже базовая математика, иногда используется в создании анимаций).
Эта функция принимает в себя целое число со значением длины ребра куба.
Ответ выведите в формате строки, который изображен в примерах.

Если в функцию попал неправильный аргумент или вычислить значения невозможно -
вернуть строку "При вычислении произошла ошибка"

НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** -
в онлайн среде браузера он не работает и тесты будут ломаться.
Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

Примеры:
calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'
*/

function calculateVolumeAndArea(edge){
    if (!Number.isInteger(edge) || edge <= 0 || typeof (edge) != 'number') {
        return 'При вычислении произошла ошибка';
    }

    const volume = edge * edge * edge;
    const area = edge * edge * 6;

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));


/*
Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:

Функция принимает только целое число от 1 до 36.
Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
"Ошибка. Проверьте правильность введенного номера места"
Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

Пример:
getCoupeNumber(33)  => 9
getCoupeNumber(7)  => 2
getCoupeNumber(300)  => "Таких мест в вагоне не существует"
getCoupeNumber(0)  => "Таких мест в вагоне не существует"
getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
*/

function getCoupeNumber(seatNumber) {
    if (typeof seatNumber != 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return 'Таких мест в вагоне не существует';
    }

    return Math.ceil(seatNumber / 4);
}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));
