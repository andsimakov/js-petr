'use strict';

function firstTask() {
    for (let i = 5; i <= 10; i++) console.log(i);
}

function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i === 13) break;
        console.log(i);
    }
}

function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) console.log(i);
    }
}


// Переписать цикл с while
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;
    while (i <= 15) {
        i++;
        if (i % 2 === 0){
            continue;
        } else {
            console.log(i);
        }
    }
}

function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i <=10; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    // Не трогаем
    return arrayOfNumbers;
}
