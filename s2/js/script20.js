'use strict';

// if (4 == 9) {
//     console.log('OK!');
// } else {
//     console.log('Error!');
// }



// if (num < 49) {
//     console.log('Error!');
// } else if (num < 100) {
//     console.log('Too much');
// }

// (num == 50) ? console.log('OK!') : console.log('Error!');

const num = '50';

switch (num) {
case '49':
    console.log('Wrong');
    break;
case '100':
    console.log('Wrong');
    break;
case '50':
    console.log('OK!');
    break;
default:
    console.log('Not this time');
    break;
}
