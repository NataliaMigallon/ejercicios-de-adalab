'use strict';

const firstDogImage = '<img src="https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg">';
const firstDogName = 'Dina';

const secondDogImage = '<img src="https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg">';
const secondDogName = 'Luna';

const thirdDogImage = '<img src="https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg">';
const thirdDogName = 'Lana';

const item1Dogs = document.querySelector('.item1', '.item2', '.item3');
/* const item2Luna = document.querySelector('.item2');
const item3Lana = document.querySelector('.item3');
 */


item1Dogs.innerHTML = `${firstDogName} ${firstDogImage} ${secondDogName} ${secondDogImage} ${thirdDogName} ${thirdDogImage}`;

