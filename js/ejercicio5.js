const notas = {
    nota1: 100,
    nota2: 100,
    nota3: 100,
};

function calcularPromedio(notas){
    const suma = notas.nota1 + notas.nota2 + notas.nota3;
    return suma / 3;
}

function determinarEstado(promedio) {
    if (promedio >= 90) {
        return "Excelente";
    } else if (promedio >= 80) {
        return "Muy bueno";
    } else if (promedio >= 70) {
        return "Bueno"; 
    } else if (promedio >= 60) {
        return "Regular";
    } else {
        return "Reprobado";
    }

}

nombre = "Mario";
console.log("El promedio es: " + calcularPromedio(notas));
console.log(`El estado de ${nombre} es: ` + determinarEstado(calcularPromedio(notas)));

//convertir determinarEstado a una arrow function
const determinarEstadoFlecha = (promedio) => {
    if (promedio >= 90) {
        return "Excelente";
    } else if (promedio >= 80) {
        return "Muy bueno";
    } else if (promedio >= 70) {
        return "Bueno"; 
    } else if (promedio >= 60) {
        return "Regular";
    } else {
        return "Reprobado";
    }
} 


const saludar = (nombre) => {
    return `Que onda ${nombre}!`;
}

console.log("Estado con arrow function: " + determinarEstadoFlecha(calcularPromedio(notas)));
console.log(saludar(nombre),'te saludo desde una arrow function!');
