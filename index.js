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

const $ulContenedorJuegos = document.getElementById( 'lista-contenedor-juegos' )
const $ulContenedorMentores = document.getElementById( 'lista-contenedor-mentores' )

const values = Object.values( juegos )

// flat ( metodo array )
// [ [{},{},{}],[{}] ] .flat( ) -> [ {},{},{},{} ]
const valuesEnUnSoloNivelDeArray = values.flat()


let nombresJuegos = crearListaNombres( valuesEnUnSoloNivelDeArray, 'title' )
let nombresMentores = crearListaNombres( mentores , 'nombre' )

function crearListaNombres( lista, propiedad ){
    let aux = []
    for( let elemento of lista ){
        aux.push( elemento[propiedad] )
    }
    return aux
}


renderLista( nombresMentores, $ulContenedorMentores )
renderLista( nombresJuegos, $ulContenedorJuegos )


function renderLista( lista, contenedor ){
    let fragment = document.createDocumentFragment()

    for( let elemento of lista ){
        fragment.appendChild( crearLi(elemento) )
    }
    
    contenedor.appendChild( fragment )
}

function crearLi(elemento){
    const li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `<span> ${ elemento } </span>`
    return li
}


























