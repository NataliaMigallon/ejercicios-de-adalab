'use strict';

const adalaberElement = document.querySelector('body');

const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: 'periodista',
  };

adalaber1.showbio = function() {
  this.name= "Maria"; 
  console.log(`Mi nombre es ${this.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}.`)
};
adalaber1.showbio()

const adalaber2 = {};
adalaber2.name = "Rocío";
adalaber2.age = 25;
adalaber2.position = "actriz";


adalaber1.showbio = function() {
    this.name= "Maria"; 
    console.log(`Mi nombre es ${this.name}, tengo ${adalaber1.age} años y soy ${adalaber1.position}.`)
};
adalaber1.showbio();

adalaber2.showbio = function () {
    console.log(`Mi nombre es ` + this.name + ' tengo ' + this.age + ' años y soy ' + this.position +'.')
}
adalaber2.showbio()