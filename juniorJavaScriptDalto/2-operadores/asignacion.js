// asinacion
/*
  x = y;   x = y;  Asignacion
  x += y;  x = x + y; suma
  x -= y;  x = x - y; resta
  x *= y;  x = x * y; multiplicacion
  x /= y;  x = x / y; division
  x %= y;  x = x % y; modulo
  x **= y;  x = x ** y; potencia

  x <<= y;  x = x << y; desplazamiento a la izquierda
  x >>= y;  x = x >> y; desplazamiento a la derecha
  x >>>= y;  x = x >>> y; sin singo de desplazamiento a la derecha

  x &= y;  x = x & y;  AND
  x ^= y;  x = x ^ y;  XOR
  x |= y;  x = x | y;  OR
*/
let mas = 9;
mas += 16;

let menos = 16;
menos -= 9;

let multipli = 16;
multipli *= 9;

let division = 16;
division /= 9;

let modulo = 16;
modulo %= 9;

let potencia = 16;
potencia **= 9;

console.log(mas)
console.log(menos)
console.log(multipli)
console.log(division)
console.log(modulo)
console.log(potencia)
