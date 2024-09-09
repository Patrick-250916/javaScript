// SE LLAMA METODOS .concat() 
//.concat() Este método se usa para concatenar (unir) dos o más cadenas de texto en una nueva cadena.

// 20) Metodos de cadenas 
let cadena = 'Cadena de prueba ';
let cadena2 = 'Cadena uniendo ';

let concat = cadena.concat('Hola ' + cadena2);

let startswith = cadena.startsWith(cadena2);
console.log(cadena);
console.log(concat);
console.log(startswith);
console.log(typeof cadena2);


// 21) Metodos de Arrays
// Tranformadores o Modifica el arrays original
//Arrays Metodo pop()
let nombre = ['Naydu', 'Patrick', 'Marcela', 'Alex'];
console.log(nombre)
console.log(nombre.pop())
console.log(nombre.length);

//Arrays Metodo push()
console.log(nombre.push('Daniel'));
console.log(nombre.reverse());


let numeros = ['abecedario', 'manzana', 'Pedro', 'Color', 'cuidad', 'teAmo'];
resultado = numeros.filter( numero => numero.length < 6)

console.log(resultado)
/* 
   - concat() Junta dos mas cadenas y retorna una nueva
   - startswith() Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false

   21) Metodos de Arrays
   - pop() elimina el último elemento de un array y lo devuelve.
   - push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
   - .length para saber cuandos caracteres 
   -filter() -crea un nuevo array con todos los elementos que cumplan la condicion
   -forEach() - ejecuta la funcion indicada una vez por cada elemento del array.
*/
