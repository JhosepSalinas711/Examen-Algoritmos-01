//Parte 1
const estudiante = {
    nombre: "Mario Salinas",
    numCuenta: "20242100073",
    materias: [
        {
            materia1: "Algoritmos y estructura de datos",
        
            materia2: "Ecuaciones Diferenciales",
        
            materia3: "Matemáticas discretas",
        }
    ],
    notas: {
        nota1: 100,
        nota2: 100,
        nota3: 100,
    },
    activo: true,
}

// Parte 2
estudiante.email = "mjsalinasc@unah.edu"; 
estudiante.activo = false; 
delete estudiante.materias[0].materia3;

// Parte 3
estudiante.nombre.destructuring = "Mario Salinas";
estudiante.numCuenta.destructuring = "20242100073";

estudiante.notas.destructuring = {
    nota1: 100,
    nota2: 100,
    nota3: 100,
};

console.log(`Nombre: ${estudiante.nombre}, número de cuenta: ${estudiante.numCuenta}`);
console.log(`Email: ${estudiante.email}`);
console.log(`Materias: ${Object.values(estudiante.materias[0]).join(', ')}`);
console.log(`Notas: Nota 1: ${estudiante.notas.nota1}, Nota 2: ${estudiante.notas.nota2}, Nota 3: ${estudiante.notas.nota3}`);
console.log(`Activo: ${estudiante.activo}`);

console.log(estudiante);
