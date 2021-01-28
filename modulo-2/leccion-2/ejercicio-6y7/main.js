'use strict';

const sentence1 = document.querySelector('.sentence');

const name1 = ' Lola';

/* const content = '<span>Hola</span>';
const content2 = '<span>, encantada de conocerte</span>'; */

const content1 = `Hola ${name1}, encantada de conocerte.`;

sentence1.innerHTML = content1;