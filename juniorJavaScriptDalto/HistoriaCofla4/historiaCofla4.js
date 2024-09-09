class Calculadora{
    constructor(){}
    sumar(num1, num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1, num2){
        return parseInt(num1) - parseInt(num2);
    }
    multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2);
    }
    dividir(num1, num2){
        return parseInt(num1) / parseInt(num2);
    }
    potencia(num, exp){
        //let numero = num;
        for (let i = 0; i < exp; i++) {
            //numero = numero*num;
            return num**exp;
        }
        //return numero;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}
const calculadora = new Calculadora();

alert('¿Que operacion deseas realizar? ');
let operacion = prompt('1: suma, 2: resta, 3: multiplicar, 4: division, 5: Potenciacion, 6: Raiz Cuadrada, 7: Raiz Cubica');
if(operacion == 1){
    let numero1 = prompt('Primer numero para sumar ');
    let numero2 = prompt('Segundo numero para sumar ');
    resultado = calculadora.sumar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if(operacion == 2){
    let numero1 = prompt('Primer numero para resta ');
    let numero2 = prompt('Segundo numero para resta ');
    resultado = calculadora.restar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if(operacion == 3){
    let numero1 = prompt('Primer numero para multiplicacion ');
    let numero2 = prompt('Segundo numero para multiplicacion ');
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if(operacion == 4){
    let numero1 = prompt('Primer numero para division ');
    let numero2 = prompt('Segundo numero para division ');
    resultado = calculadora.dividir(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if(operacion == 5){
    let numero1 = prompt('Numero a potenciar ');
    let numero2 = prompt('Exponente ');
    resultado = calculadora.potencia(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if(operacion == 6){
    let numero1 = prompt('conocer la Raiz Cuadrada de: ');
    //let numero2 = prompt('Exponente ');
    resultado = calculadora.raizCuadrada(numero1);
    alert(`Tu resultado es ${resultado}`) // prompt 64 = 8 Ejemplo: 8 * 8 = 64
}
else if(operacion == 7){
    let numero1 = prompt('conocer la Raiz Cubica de');
    //let numero2 = prompt('Exponente ');
    resultado = calculadora.raizCubica(numero1);
    alert(`Tu resultado es ${resultado}`) // prompt 125 = 5 Ejemplo: 5 * 5 * 5 = 125
}else{
    alert('lo siento solo son 1,2,3,4,5,6,7')
}
