'use strict';

function first(){
    setTimeout(function() {
        console.log(1);
    }, 500);
}


function second(){
    // Do smth
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I'm learning ${lang}`);
    callback();
}

// learnJS('JavaScript', function() {
//     console.log('I passed this lesson!');
// });

function done() {
    console.log('I passed this lesson!');
}

learnJS('JavaScript', done);
