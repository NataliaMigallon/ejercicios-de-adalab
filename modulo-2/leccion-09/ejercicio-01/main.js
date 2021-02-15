'use strict';

const arrNumbers = [];

function get100Numbers() {

    for (let i = 1; i < 101; i++) {
        arrNumbers.push(i);
    }
}
get100Numbers();
console.log(arrNumbers);