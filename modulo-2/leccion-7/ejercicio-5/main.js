'use strict';
 
const arr = [5, 7, 4, 2, 8];
/*
let media = 0;

for (let i = 0; i < arr.length; i++) {
    media = media + arr[i]; /*media += arr[i];*/
//}
/*media = media / arr.length;
console.log(media); */

//2ª parte del ejercicio

function average(numbers) {
    let media = 0;    
    for (let i = 0; i < numbers.length; i++) {
        media = media + numbers[i];
    }
    media = media / numbers.length;
    return media
}

const media = average(arr);
console.log(media);
