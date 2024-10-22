const alumnos = [ 
    {
    nombre: 'Pedro',
    edad: '33',
    ciudad: 'Barcelona',
    },
    {
    nombre: 'Marta',
    edad: '30',
    ciudad: 'Madrid',
    },
    {
    nombre: 'Albert',
    edad: '29',
    ciudad: 'Barcelona',
    },
    {
    nombre: 'Carlo',
    edad: '55',
    ciudad: 'Valencia',
    },
    {
    nombre: 'Miguel',
    edad: '20',
    ciudad: 'Madrid',
    },
    {
    nombre: 'Manoel',
    edad: '25',
    ciudad: 'Valencia',
    },
    {
    nombre: 'Ana',
    edad: '27',
    ciudad: 'Barcelona',
    },
    {
    nombre: 'Sara',
    edad: '45',
    ciudad: 'Madrid',
    },
    {
    nombre: 'Claudio',
    edad: '40',
    ciudad: 'Valencia',
    },
    {
    nombre: 'Rafael',
    edad: '35',
    ciudad: 'Valencia',
    },
    {
    nombre: 'Nathalia',
    edad: '19',
    ciudad: 'Barcelona',
    },

]
    const Barcelona = alumnos.filter(alumno => alumno.ciudad === 'Barcelona')
    const BarcelonaMenor = Barcelona.filter(alumno => alumno.edad < 28) 
    console.log(BarcelonaMenor)

    const Madrid = alumnos.filter(alumno => alumno.ciudad === 'Madrid')
    const MadridMenor = Madrid.filter(alumno => alumno.edad < 28 )
    console.log(MadridMenor)

    const Valencia = alumnos.filter(alumno => alumno.ciudad === 'Valencia')
    const ValenciaMenor = Valencia.filter(alumno => alumno.edad < 28)
    console.log(ValenciaMenor)

    const BarMadValMenor = [...BarcelonaMenor, ...MadridMenor, ...ValenciaMenor]
    const BarMadValMenorord = BarMadValMenor.sort((a, b) => a.edad - b.edad)
    console.log(BarMadValMenor)




