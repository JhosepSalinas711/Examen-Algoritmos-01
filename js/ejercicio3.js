const num1 = parseFloat(15.7);
const num2 = parseFloat(4.3);

const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;
const division = num1 / num2;
const modulo = num1 % num2;

console.log('Número 1:', num1);
console.log('Número 2:', num2);
console.log('Suma:', suma);
console.log('Resta:', resta);
console.log('Multiplicación:', multiplicacion); 
console.log('División:', division);
console.log('Módulo:', modulo);

console.log('La suma redondeada hacia arriba es:', Math.ceil(suma));
console.log('La suma redondeada hacia abajo es:', Math.floor(suma));
console.log('La suma redondeada al entero más cercano es:', Math.round(suma));
console.log('La raiz cuadrada de la suma es:', Math.sqrt(suma));

const n1 = "25.89";
const n2 = "42";

//verificar si n1 es numero entero 
const isInteger = Number.isInteger(parseFloat(n1));

nu2 = parseInt(n2);

console.log('¿n1 es un número entero?', isInteger);
console.log('El numero 2 con un un solo entero es:', Math.round(nu2));

