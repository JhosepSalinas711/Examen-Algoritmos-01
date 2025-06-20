const frase = "Estoy aprendiendo JavaScript en el CUROC";

console.log(frase);
console.log('La longitud de la frase es:', frase.length);
console.log('La frase sin espacios al inicio y al final es:', frase.trim())
console.log('La frase en mayúsculas es:', frase.toUpperCase());
console.log('La frase en minúsculas es:', frase.toLowerCase());

//verificar si la frase contiene la palabra "JavaScript"
if (frase.includes("JavaScript")) {
    console.log("La frase contiene la palabra 'JavaScript'");
}   else {  
    console.log("La frase no contiene la palabra 'JavaScript'");
}

//Encontrar la posicion de la palabra "CUROC"
const posicionCuroc = frase.indexOf("CUROC");
if (posicionCuroc !== -1) {
    console.log("La palabra 'CUROC' se encuentra en la posición:", posicionCuroc);
}

//reemplazar "CUROC" por "UNAH-Copan"
const fraseModificada = frase.replace("CUROC", "UNAH-COPAN");
console.log(fraseModificada);

//Dividir la frase en array de palabras
const palabras = frase.split(" ");
console.log("Array de palabras:", palabras);

//Extraer las primeras 6 letras de la frase
const primerasSeisLetras = frase.slice(0, 6);
console.log("Primeras 6 letras:", primerasSeisLetras);

//Tomar solo la palabra "JavaScript" de la frase
const palabraJavaScript = frase.slice(18, 28);
console.log("Palabra 'JavaScript':", palabraJavaScript);

