// 1:12:03
caja = "contenido" // es igual var caja = "contenido"

// backticks
let nombre = "lucas dalto";
let frase = `soy ${nombre} puedo ejecutar html navegador`;
let comillas = 'hola "Dalto"'; 
console.log(frase);
console.log(comillas);

// operadores (Intermedio)
// operadores de comparacion

let numero = 23;
let numero2 = '23';
console.log(`Compara == ${numero == numero2}`); // a == b compara si es igual  true
console.log(`Distnto != ${numero != numero2}`) // a != b es distinto false

console.log(`=== ${numero === numero2}`); // a === b extrictamente iguales y el tipo de dato  5===5 true
console.log(`!== ${numero !== numero2}`); // a !== b extrictamente iguales y el tipo de dato true
console.log(`Mayor > ${numero > numero2}`) // a > b  es mayor 
console.log(`Mayor o igual >= ${numero >= numero2}`); // a >= b es mayor o igual
console.log(`Menor < ${numero < numero2}`) // a < b es menor
console.log(`Menor o igual <= ${numero <= numero2}`); // a < b es menor o igual

// operadores logicos  **solo aceptan valores True y False**
// AND=&&  OR=||  NOT=!  !afirmacion1
let num1 = 12;
let num2 = 24;
let afirmacion1 = num1 < num2;
let afirmacion2 = num1 < num2;
console.log("AND " + afirmacion1 && afirmacion2)
console.log(afirmacion1 || afirmacion2)
console.log(!afirmacion1)

// camelCase



