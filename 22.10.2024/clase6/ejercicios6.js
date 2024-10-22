const LaLiga = [
    {
        nombre: 'Robert Lewandowski',
        equipo:'Barcelona',
        Goles: 23,   
    },{
        nombre: 'Karim Benzema',
        equipo:'Real Madrid',
        Goles: 19,   
    },{
        nombre: 'Iago Aspas',
        equipo:'Celta de Vigo',
        Goles: 17,   
    },{
        nombre: 'Borja Iglesias',
        equipo:'Real Betis',
        Goles: 15,   
    },{
        nombre: 'Antoines Grizman',
        equipo:'Atletico de Madrid',
        Goles: 15,   
    }
]

        const ordenar = LaLiga.sort((a, b) => a.Goles - b.Goles)
        const totalDeGoles = ordenar.reduce((soma, equipo) => soma + equipo.Goles, 0 )
        console.log(ordenar)
        console.log(totalDeGoles)
        const mediaDeGoles = Math.round(totalDeGoles / ordenar.length)
        console.log(mediaDeGoles)