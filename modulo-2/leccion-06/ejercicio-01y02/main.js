'use strict';

const adalaber1Element = document.querySelector('.adalaber1');
const adalaber2Element = document.querySelector('.adalaber2');

const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: 'periodista',
  };

const adalaber2 = {};
  adalaber2.name = "Rocío";
  adalaber2.age = 25;
  adalaber2.profession = "actriz";


/* adalaberElement.innerHTML = 'Mi nombre es ' + (adalaber1['name']) + ', tengo ' + (adalaber1['age']) + ' años ' + 'y soy ' + (adalaber1['profession']);
 */ //Otra forma de escribir lo siguiente:
adalaber1Element.innerHTML = 'Mi nombre es ' + (adalaber1.name) + ', tengo ' + (adalaber1.age) + ' años ' + 'y soy ' + (adalaber1.profession);

adalaber2Element.innerHTML = 'Mi nombre es ' + (adalaber2.name) + ', tengo ' + (adalaber2.age) + ' años y soy ' + (adalaber2.profession);


// Ejercicio 2

adalaber1.run = () => {
  console.log("Estoy corriendo")
}
adalaber1.run();

//añadimos una nueva propiedad que va a ser una funcion

adalaber1.runMarathon = distance => {
  console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);
}

adalaber1.runMarathon(50);
