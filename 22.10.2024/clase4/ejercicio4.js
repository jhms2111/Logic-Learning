
const alumnosNotas = [ 
    {
        nombre: 'Maria',
        nota: '8',
    },
    {
        nombre: 'Jorge',
        nota: '5',
    },
    {
        nombre: 'Fernanda',
        nota: '3',
    },
    {
        nombre: 'Felipe',
        nota: '6',
    },
    {
        nombre: 'Caio',
        nota: '4',
    },
    {
        nombre: 'Rafaela',
        nota: '10',
    },
    {
        nombre: 'Ana',
        nota: '8',
    },

]

const ordenarNotas = alumnosNotas.sort((a, b) => a.nota - b.nota)
console.log(ordenarNotas)