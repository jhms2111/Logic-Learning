const alumnos = [ 
    {
        nombre: 'Augusto',
        apellido: 'Fernandes',
    },
    {
        nombre: 'Maria',
        apellido: 'Perez',
    },
    {
        nombre: 'Ricardo',
        apellido: 'Rodrigues',
    },
    {
        nombre: 'Pedro',
        apellido: 'Hernandes',
    }
]

const arrNomes = alumnos.map(alumnos => `${alumnos.nombre} ${alumnos.apellido}`)
console.log(arrNomes)
