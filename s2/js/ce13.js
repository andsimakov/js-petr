'use strict';

/*
У вас есть небольшой кусочек данных о торговом центре, которые записаны
в объекте shoppingMallData. Они содержат массив с данными о магазинах,
где указана длина и ширина помещения; высоту помещения; стоимость отопления
за 1 кубический метр и бюджет на оплату отопления за месяц.

Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку.
Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно',
если нет - 'Бюджета недостаточно'. И все 🙂

Но эта задача содержит несколько подзадач внутри:

- вычисление общей площади всех магазинов, которая вычисляется как длина магазина,
умноженная на его ширину;
- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
- определение того, хватает ли бюджета на оплату такого объема;
- все числа идут без единиц измерения для упрощения, просто цифры и все;
- функция должна продолжать работать, даже если изменяется количество магазинов, высота,
бюджет или подставляется вообще другой объект.
*/

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
    getTotalArea: () => {
        let totalArea = 0;
        for (let i = 0; i < shoppingMallData.shops.length; i++) {
            totalArea = totalArea + (shoppingMallData.shops[i].width * shoppingMallData.shops[i].length);
        }
        return totalArea;
    },
    getTotalVolume: () => {
        return shoppingMallData.getTotalArea() * shoppingMallData.height;
    },
    isSufficientBudget: () => {
        let totalPayment = 0;
        let result = '';
        let budgetStr = 'Бюджета ';
        totalPayment = shoppingMallData.getTotalVolume() * shoppingMallData.moneyPer1m3;
        totalPayment <= shoppingMallData.budget ? result = `${budgetStr}достаточно` : result = `${budgetStr}недостаточно`;
        return result;
    }
};

// ^^^ Implemented methods inside object

// console.log(shoppingMallData.getTotalArea());
// console.log(shoppingMallData.getTotalVolume());
// console.log(shoppingMallData.isSufficientBudget());


// Implemeted separated functions
function getTotalArea(data) {
    let totalArea = 0;
    for (let i = 0; i < data.shops.length; i++) {
        totalArea = totalArea + (data.shops[i].width * data.shops[i].length);
    }
    return totalArea;
}

function getTotalVolume(totalArea, data) {
    return totalArea * data.height;
}

function isSufficientBudget(totalVolume, data) {
    let totalPayment = 0;
    let result = '';
    let budgetStr = 'Бюджета ';
    totalPayment = totalVolume * data.moneyPer1m3;
    totalPayment <= data.budget ? result = `${budgetStr}достаточно` : result = `${budgetStr}недостаточно`;
    return result;
}

function isBudgetEnough(data) {
    const totalArea = getTotalArea(data);
    const totalVolume = getTotalVolume(totalArea, data);
    const isSufficient = isSufficientBudget(totalVolume, data);

    return isSufficient;
}

console.log(isBudgetEnough(shoppingMallData));
