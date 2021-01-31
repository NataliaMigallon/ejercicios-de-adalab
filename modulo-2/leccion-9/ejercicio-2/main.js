'use strict';

const revNumbers = [];

function getReversed100Numbers() {

    for (let i = 1; i < 101; i++) {
        revNumbers.push(i);
    }
}
getReversed100Numbers();
console.log(revNumbers.reverse());