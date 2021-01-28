'use strict';

const adalaberElement = document.querySelector('body');

const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: 'periodista',
  };

const adalaber2 = {};
  adalaber2.name = "Rocío";
  adalaber2.age = 25;
  adalaber2.position = "actriz";

/* function runAdalaber(){

}
console.log(runAdalaber('Estoy corriendo')); */

adalaberElement.innerHTML = 'Mi nombre es ' + (adalaber1['name']) + ', tengo ' + (adalaber1['age']) + ' años ' + 'y soy ' + (adalaber1['profession']);

// Ejercicio 2

adalaber1.run = () => {
  console.log("Estoy corriendo")
}
adalaber1.run();

//añadimos una nueva propiedad que va a ser una funcion

adalaber1.runMarathon = (distance) => {
  console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);
}

adalaber1.runMarathon(50);
