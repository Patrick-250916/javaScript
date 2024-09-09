// objetos Math - Basico
// Metodos
/**
 * .sqrt() La Raiz Cuadrada de 25 = 5
 * .cbrt() la raiz cubica de 27 = 3
 * .max() Devuelve el numero mas grande 
 * .min() Devuelve el numero mas pequeño
 * .random() Devuelve el numero entre 0 y 1 con decimales
 * .round() lo rendodea al entero más cercano
 * .fround() Dalto nunca lo usa
 * .floor() Devuelve el mayor entero menor que o igual aun numero
 * .trunc() Elimina los decimales
 * 
 * PROPIEDADES
 * PI
 * SQRT1_2
 * SQRT2
 * 
 * CONSTANTES Y LOGARITMOS
 * E  -constante de Euler
 * LN2 -Logaritmo Natural de 2, aproximado 0.693
 * LN10 -Logaritmo Natural de 10, aproximado 2.303
 * LOG2E -Logaritmo de E con base 2, aproximado 1.443
 * LOG10E -Logaritmo de E con base 10, aproximado 0.434
 */
console.log(`La Raiz Cuadrada de 25 = ${Math.sqrt(25)}`);

console.log(`la raiz cubica de 27 = ${Math.cbrt(27)}`);

console.log(`Devuelve el numero mas grande ${Math.max(4,3,5,1,2,16,3,10)}`);

console.log(`Devuelve el numero mas pequeño ${Math.min(4,3,5,1,2,16,3,10)}`);

console.log(`Devuelve el numero entre 0 y 1 = ${Math.random(4,3,5,1,2,16,3,10)}`);

console.log(`lo rendodea al entero más cercano ${Math.round(23.43)}`);
console.log(`trunc() Elimina los decimales ${Math.trunc(23.93)}`);
console.log(`pi ${Math.PI}`);
console.log(`${Math.SQRT1_2}`);
console.log(`${Math.SQRT2}`);