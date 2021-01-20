'use strict';

const sentence1 = document.querySelector('.sentence');

const name1 = 'Lola';

const content = '<p>Hola</p>';
const content2 = '<p>, encantada de conocerte</p>';

const content1 = content + name1 + content2;

sentence1.innerHTML = content1;