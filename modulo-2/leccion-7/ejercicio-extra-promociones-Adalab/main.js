"use strict";

const promos = [
  {
    promo: "A",
    name: "Ada",
    students: [
      {
        id: "id-1",
        name: "Sofía",
        age: 20,
      },
      {
        id: "id-2",
        name: "María",
        age: 21,
      },
      {
        id: "id-3",
        name: "Lucía",
        age: 22,
      },
    ],
  },
  {
    promo: "B",
    name: "Borg",
    students: [
      {
        id: "id-4",
        name: "Julia",
        age: 23,
      },
      {
        id: "id-5",
        name: "Tania",
        age: 24,
      },
      {
        id: "id-6",
        name: "Alaia",
        age: 25,
      },
    ],
  },
  {
    promo: "C",
    name: "Clarke",
    students: [
      {
        id: "id-7",
        name: "Lidia",
        age: 26,
      },
      {
        id: "id-8",
        name: "Celia",
        age: 27,
      },
      {
        id: "id-9",
        name: "Nadia",
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];
const divElement = document.querySelector(".js-result");

// 1.Pintar en pantalla los nombres de las promos

let promosName = [];
for (let i = 0; i < promos.length; i++) {
  /* console.log(promos[i].name); */
  promosName[i]= promos[i].name;
/*   divElement.innerHTML = `<li> ${promos[i].name} </li>`; */
}

divElement.innerHTML = `<li> ${promosName[0]} </li><li> ${promosName[1]} </li><li> ${promosName[2]} </li>`;
/* divElement.innerHTML = promosName;

divElement.innerHTML = `<li> ${promosName} </li><li> ${promosName} </li><li> ${promosName} </li>`;
 */
//sin terminar, queda colocar en listas

// 2. Pintar en pantalla las letras de las promos y los nombres de las promos
