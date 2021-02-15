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

/* let promosName = [];
for (let i = 0; i < promos.length; i++) {
  promosName[i] = promos[i].name;
  divElement.innerHTML += `<li> ${promosName[i]} </li>`;
} */

// 2. Pintar en pantalla las letras de las promos y los nombres de las promos

/* let promosNameLetter1 = [];
let promosNameLetter2 = [];
for (let index = 0; index < promos.length; index++) {
  promosNameLetter1[index] = promos[index].name;
  promosNameLetter2[index] = promos[index].promo;
  divElement.innerHTML += `<li>`;
  divElement.innerHTML += `<p> Nombre: ${promosNameLetter1[index]} </p>`;
  divElement.innerHTML += `<p> Promo: ${promosNameLetter2[index]} </p>`;
  divElement.innerHTML += `</li>`;
} */

// 3. Pintar en pantalla las letras de las promos, los nombres de las promos y el número de alumnas

/* for (let index = 0; index < promos.length; index++) {
  divElement.innerHTML += `<li>`;
  divElement.innerHTML += `<p> Nombre: ${promos[index].name} </p>`;
  divElement.innerHTML += `<p> Promo: ${promos[index].promo} </p>`;
  divElement.innerHTML += `<p> Número de alumnas: ${promos[index].students.length} </p>`;
  divElement.innerHTML += `</li><br>`;
} */

/* let html = '<ul>';
for (let i = 0; i < promos.length; i++) {
  const namePromo = promos[i].name;
  const promoPromo = promos[i].promo;
  html += '<li>';
  html += '<p>';
  html += `Nombre: ${namePromo}`;
  html += '</p>';
  html += '<p>';
  html += `Promo: ${promoPromo}`;
  html += '</p>';
  html += '</li>';
}
 html += '</ul>';
 result.innerHTML = html;
 */
// 4. Pintar en pantalla los nombres de las promos y los nombres y la edad de las alumnas

/* for (let index = 0; index < promos.length; index++) {
  divElement.innerHTML += `<li>`;
  divElement.innerHTML += `<p> Nombre: ${promos[index].name} </p>`;

  for (let index1 = 0; index1 < promos.length; index1++) {
    divElement.innerHTML += `<ul>`;
    divElement.innerHTML += `<li>${promos[index].students[index1].name}, ${promos[index].students[index1].age}`;
    divElement.innerHTML += `</li>`;
    divElement.innerHTML += `</ul>`;
  }
  divElement.innerHTML += `</li><br>`;
} */

// 5. Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas

/* for (let index = 0; index < promos.length; index++) {
  divElement.innerHTML += `<li>`;
  divElement.innerHTML += `<p> Nombre: ${promos[index].name} </p>`;

  for (let index1 = 0; index1 < promos.length; index1++) {
    divElement.innerHTML += `<ul>`;
    divElement.innerHTML += `<li id=${promos[index].students[index1].id}>${promos[index].students[index1].name}, ${promos[index].students[index1].age}`;
    divElement.innerHTML += `</li>`;
    divElement.innerHTML += `</ul>`;
  }
  divElement.innerHTML += `</li><br>`;
} */

// 6. Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas que tenga edad par

/* for (let index = 0; index < promos.length; index++) {
  divElement.innerHTML += `<li>`;
  divElement.innerHTML += `<p> Nombre: ${promos[index].name} </p>`;

  for (let index1 = 0; index1 < promos.length; index1++) {
    if (promos[index].students[index1].age % 2 === 0) {
      divElement.innerHTML += `<ul>`;
      divElement.innerHTML += `<li id=${promos[index].students[index1].id}>${promos[index].students[index1].name}, ${promos[index].students[index1].age}`;
      divElement.innerHTML += `</li>`;
      divElement.innerHTML += `</ul>`;
    }
  }
  divElement.innerHTML += `</li><br>`;
} */

// 7. Pintar en pantalla los nombres de las promos y los nombres la edad y el id de las alumnas que trabajan en Google

/* for (let index = 0; index < promos.length; index++) {
  divElement.innerHTML += `<li>`;
  divElement.innerHTML += `<p> Nombre: ${promos[index].name} </p>`;

  for (let index1 = 0; index1 < promos.length; index1++) {
    if (
      promos[index].students[index1].id === studentsWorkingInGoogle[0] ||
      promos[index].students[index1].id === studentsWorkingInGoogle[1] ||
      promos[index].students[index1].id === studentsWorkingInGoogle[2] ||
      promos[index].students[index1].id === studentsWorkingInGoogle[3]
    ) {
      divElement.innerHTML += `<ul>`;
      divElement.innerHTML += `<li id=${promos[index].students[index1].id}>${promos[index].students[index1].name}, ${promos[index].students[index1].age}`;
      divElement.innerHTML += `</li>`;
      divElement.innerHTML += `</ul>`;
    }
  }
  divElement.innerHTML += `</li><br>`;
}
 */
// 8. Pintar en pantalla los nombres de las promos y los nombres, la edad, el id de las alumnas y pintar el id de la alumna en consola cuando se haga click en una de ellas

let studentsNames = [];


for (let index = 0; index < promos.length; index++) {
  divElement.innerHTML += `<li>`;
  divElement.innerHTML += `<p> Nombre: ${promos[index].name} </p>`;

  for (let index1 = 0; index1 < promos.length; index1++) {
    divElement.innerHTML += `<ul>`;
    divElement.innerHTML += `<li id=${promos[index].students[index1].id}>${promos[index].students[index1].name}, ${promos[index].students[index1].age}`;
    divElement.innerHTML += `</li>`;
    divElement.innerHTML += `</ul>`;
  }
  divElement.innerHTML += `</li><br>`;
}

function handleClickId(event) {
  console.log(event.currentTarget.id);
}

nameClick.addEventListener("click", handleClickId);
nameClick.innerHTML = 
