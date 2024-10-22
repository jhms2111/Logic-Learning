
    /*
*Você tem uma lista de alunos com suas idades, notas e a cidade onde vivem. Sua tarefa é criar um script que faça o seguinte:
*Filtre os alunos que têm nota maior ou igual a 7.
*Crie uma lista formatada que exiba o nome completo e a idade dos alunos filtrados.
 */


const alumnos = [

    {
        nombre: 'Pedro',
        edad: '15',
        nota: '7',
        ciudad: 'Barcelona',
    },
    {
        nombre: 'Maria',
        edad: '16',
        nota: '9',
        ciudad: 'Madrid',
    },
    {
        nombre: 'Marco',
        edad: '14',
        nota: '5',
        ciudad: 'Sevilla',
    },
    {
        nombre: 'Jessica',
        edad: '15',
        nota: '6',
        ciudad: 'Zaragoza',
    },
]
    const aprobados = (alumnos.filter (alumno => alumno.nota >= 7 ) )
    const listaAprobados = aprobados.map(alumno => ` Aprovados ${alumno.nombre} ${alumno.edad} ${alumno.nota} ${alumno.ciudad} `)
    console.log(listaAprobados)
    
