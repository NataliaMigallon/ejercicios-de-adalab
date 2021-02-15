'use strict';

const rainbow = document.querySelector('.notification');
const title = document.querySelector('.title');
const text = document.querySelector('.text');

rainbow.classList.add('error');

if (rainbow.classList.contains('success')) {
  title.innerHTML = 'Correcto';
  text.innerHTML = 'Los datos son correctos';
} else if (rainbow.classList.contains('error')) {
  title.innerHTML = 'Error';
  text.innerHTML = 'Ha surgido un error';
} else if (rainbow.classList.contains('warning')) {
  title.innerHTML = 'Aviso';
  text.innerHTML = 'Tenga cuidado';
} else {
  title.innerHTML;
  text.innerHTML;
}


/* if (rainbow.classList.contains('success')) {
  rainbow.innerHTML = '<h1>Correcto</h1><p>Los datos son correctos</p>';
} else if (rainbow.classList.contains('error')) {
  rainbow.innerHTML = '<h1>Error</h1><p>Ha surgido un error</p>';
} else if (rainbow.classList.contains('warning')) {
  rainbow.innerHTML = '<h1>Aviso</h1><p>Tenga cuidado</p>';
}

rainbow.classList.add('success'); */