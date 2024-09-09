// curso de MANIPULACION DEL DOM Platzi

const title = document.querySelector('h2.h2-class'); // h2
const identificador = document.getElementById('h2-id'); // h2

const input = document.querySelector('input'); // inpunt
// querySelector(); lo hizo con el input y tenia abributos Con console.dir 
console.dir(title);
console.dir(input);

input.value = 'Patrick';

// Con variable title querySelector
title.textContent = 'Nivel master, querySelecto';
title.style.fontFamily = 'arial';
title.style.color = 'red';
console.log(title.style);


// creando el elemento
// Variables para el Contenedor Padre
const contentArea = document.getElementById('contentArea');
console.log(contentArea);

// creamos un nuevo elemento p
const newElement = document.createElement("p");

// Agrega contenido a la Etiqueta p
newElement.textContent = "Fui creado con createElement";

// llamar al contenedor donde quieres inyectar o agregar en html
contentArea.append(newElement);

let numero = 4
let numero2 = 5
let colorRed = numero + numero2;


console.log("%cHola", "color: tomato", "%cPatrick", "color:blue")
console.log("%cPatrick", "color:blue")

console.log(`%c${colorRed}`, "color:green; background:tomato; padding:10px 50px; font-size:30px")
