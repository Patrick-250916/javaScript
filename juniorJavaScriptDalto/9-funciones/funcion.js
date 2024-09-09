//funciones  funciones flechas =>
//prompt()  es para pedir datos a un navegador

function saludar(nombre){ // declarar la funcion
    //alert('hola');
    console.log("hola funcion, hola "+ nombre + " como esta tu dia")
    return "la funcion se ejecuto correctamente"
}
let saludo = saludar('Patrick'); // llamando la funcion
console.log(saludo)

// funcion para sumar
function sumando(uno, dos){ // () =>
    let consulta = uno + dos;
    console.log(consulta)
}
sumando(1, 22)

// funcion Con Flecha =>   Me gusta la funcion con flecha
const suma =  (tres, cuatro) =>{ // () Dentro del parentisis Son parametros
    let flecha = tres + cuatro;
    console.log(flecha)
}
suma(3, 4)

// Historia  de Cofla Capitulo 2
let free = true;
const validacionCliente = (time) => {
    let edad = prompt('¿Cual es tu edad? ');
    if (edad > 18){
        if (time >= 2 && time < 7 && free == false){
            alert('podes pasar gratis ');
            free = true;
        }else{
            alert('podes pasar, pero tenes que pagar la entrada ');
        }
    }else{
        alert('mira papu, os menor de edad por ende no vas a pasar, MAQUINOlA')
    }
}
validacionCliente()

