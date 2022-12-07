// DOC -> https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
// DOC -> https://developer.mozilla.org/es/docs/Glossary/Hoisting


// Declaracion de Funcion 

function saludar(){
    console.log( 'Hola ')
}
// saludar()



// Expresión de Función

let saludarDos = function(){
    console.log( 'Expresión' )
}
// saludarDos()

// Parametros de Funcion

// let nombre = 'Matias'

// function saludarAlumno( alumno, curso ){
//     console.log( `Hola ${alumno} alumno de ${curso}` )
// }
// saludarAlumno( nombre , 'mern' )
// saludarAlumno( 'Agustin' )
// saludarAlumno( 'Antonella' )

// Parametros por default

// function saludarAlumnoDos( alumno="-", curso="JavaScript" ){
//     console.log( `Hola ${alumno} alumno de ${curso}` )
// }
// saludarAlumnoDos( 'Matias', 'mern' )
// saludarAlumnoDos( 'Alejandro', 'mern' )
// saludarAlumnoDos( 'Agustin', undefined )




// Return y Alcance de las variables de una funcion


const crearSaludo = function( alumno ){
    let saludo = `Hola ${ alumno }`
    return saludo
}
const saludoAStiven = crearSaludo( 'Stiven' )

// console.log( saludoAStiven )



const mentores = [
    {
        nombre: 'Nicolas',
        edad: 28,

    },
    {
        nombre: 'Lucre',
        edad: 27,
    },
    {
        nombre: 'Lucas',
        edad: 22,
    },
    {
        nombre: 'Kevin',
        edad: 30,

    },
    {
        nombre: 'Cami',
        edad: 28,
    },
    {
        nombre: 'Flor',
        edad: 22,
    },
]

const alumnos = [
    {
        nombre: 'Hector',
        edad: 26,

    },
    {
        nombre: 'Stiven',
        edad: 21,
    },
    {
        nombre: 'Mateo',
        edad: 22,
    },
    {
        nombre: 'Eliana',
        edad: 26,

    },
    {
        nombre: 'Luciana',
        edad: 26,
    },
    {
        nombre: 'Patricio',
        edad: 20,
    },
]

function filtrarPorEdad( listaPersonas, edad ){
    let aux = []
    for( let persona of listaPersonas ){
        if(persona.edad >= edad){
            aux.push( persona )
        }
    }
    return aux 
}

let mentoresMayoresA25 = filtrarPorEdad( mentores, 25 )
let mentoresMayoresA28 = filtrarPorEdad( mentores, 28 )
let alumnosMayoresA25 = filtrarPorEdad( alumnos, 25 )
console.log( mentoresMayoresA25 )
console.log( mentoresMayoresA28 )
console.log( alumnosMayoresA25 )




// funciones flecha

