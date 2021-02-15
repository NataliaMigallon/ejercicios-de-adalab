'use strict';

const scrollElement = document.querySelector('.scroll');

function handleScroll() {
    if(window.scrollY > 250){
        scrollElement.classList.add('red');
        scrollElement.classList.remove('green');
    } else {
        scrollElement.classList.remove('red');
        scrollElement.classList.add('green');
    }
}

window.addEventListener('scroll', handleScroll);