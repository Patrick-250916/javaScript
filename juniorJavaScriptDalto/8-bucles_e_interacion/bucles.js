// bucles while, do while, for, for in, 
console.log("Hola bienvenido  bucles")
let numero = 0;

if (numero < 10){
    numero++;
    console.log(numero)
}
console.log("Hola soy while ")

numero = 0;
while(numero<7){  // while inderterminados Infinito condicion sea falsa
    numero++;
    console.log(numero)
}
console.log("Hola soy while tengo un if ")

numero = 0;
while(numero<100){  // Infinito condicion sea falsa
    numero++;
    console.log(numero)
    if (numero == 10){
        break; // break = salir
    }
    //document.write("fin <br>")
}

// bucle for
// i = iteracion
console.log("Hola soy for ")

let tabla = prompt("tabla desea ")
//const readlineSync = require('readline-sync');
//const tabla = readlineSync.question('tabla deseada ');
for (let num = 0; num<13; num++){
    resultado = tabla+" * "+ num +" = "+ tabla*num;
    console.log(resultado + " <br>")
}

// bucle for  in= Muestra por numero 
let animales = ["gato", "perro", "loro", "raton"]
for(animal in animales){// animal Posicion Numerica 
  console.log(animal) //Mostrar nombre animales[animal] 
}

// bucle for  of= Muestra por nombre 
for(animal of animales){
    console.log(animal)
}

