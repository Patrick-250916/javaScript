const sumar = (num1, num2) =>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) =>{
    return parseInt(num1) - parseInt(num2);
}
const multiplicar = (num1, num2) =>{
    return parseInt(num1) * parseInt(num2);
}
const dividir = (num1, num2) =>{
    return parseInt(num1) / parseInt(num2);
}

alert('¿Que operacion deseas realizar? ');
let operacion = prompt('1: suma, 2: resta, 3: multiplicar, 4: division,');
if(operacion == 1){
    let numero1 = prompt('Primer numero para sumar ');
    let numero2 = prompt('Segundo numero para sumar ');
    resultado = sumar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if(operacion == 2){
    let numero1 = prompt('Primer numero para resta ');
    let numero2 = prompt('Segundo numero para resta ');
    resultado = sumar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if(operacion == 3){
    let numero1 = prompt('Primer numero para multiplicacion ');
    let numero2 = prompt('Segundo numero para multiplicacion ');
    resultado = sumar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if(operacion == 4){
    let numero1 = prompt('Primer numero para division ');
    let numero2 = prompt('Segundo numero para division ');
    resultado = sumar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}else{
    alert('lo siento solo son 1,2,3,4,')
}