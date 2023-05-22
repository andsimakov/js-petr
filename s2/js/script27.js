'use strict';

const usdCurr = 28;
const discount = .9;

function convert(amount, curr) {
    return amount * curr;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res, discount);


function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return; // Return nothing, just break function execution. Returns indefined
    }
    console.log('done'); // Won't be printed in case of returned
}

test();


// Returns indefined
function doNothing() {}
console.log(doNothing() === undefined);
