const alumnos = [ 
    {
        nombre: 'Maria',
        nota: 5,
    },
    {
        nombre: 'Marcel',
        nota: 10,
    },
    {
        nombre: 'Alejandro',
        nota: 2
    },
]

const formulario = document.querySelector('#formulario')
const listaAlumnos = document.querySelector('#listaAlumnos')
const message = document.querySelector('#message')

formulario.onsubmit = e => {
    e.preventDefault()


const nota = document.forms.formulario.inputNova.value
filtrarAlumno(nota)
}

function filtrarAlumno(nota) {
    let htmlAlumnos = alumnos.reduce((acc, curr) => {
        if (curr.nota == nota ) {
            acc += `
            <li>
            ${curr.nombre} | Nota: ${curr.nota}
            </li>
            ` 
        }
            return acc
        },'')

        if(htmlAlumnos) {
            listaAlumnos.innerHTML = htmlAlumnos
            message.innerText = ''
        }  else {
                listaAlumnos.innerHTML = ''
                message.innerText = 'Ninguno alumno has tenido esta nota!'
        }
         document.forms.formulario.inputNova.value = ''
    }
