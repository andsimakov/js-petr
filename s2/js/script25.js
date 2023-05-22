'use strict';

let num = 20;

function showFirstMessage (text) {
    console.log(text);

    // Local variable accessible on in the function scope
    // let num = 20;

    // Global var changed inside function
    // num = 10;

    let num = 10; // If comment this, global var num will be used
    console.log(num);
}

showFirstMessage('Hello World!');
console.log(num);


function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

// Function declaration
function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


// Function expression
const logger = function() {
    console.log('Hello');
};

logger();

const arrow_calc = (a, b) => { return a + b }; // Unfolded notation
const arrow_calc = (a, b) => a + b; // Compacted arrow notation
const arrow_calc = (a, b) => {
    console.log('1');
    return a + b;
}; // More complex option
