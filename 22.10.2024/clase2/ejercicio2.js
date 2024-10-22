
const Estados = [
    {
        estado: 'Goias',
        capital: 'Goiania',
    },
    {
        estado: 'Sao Paulo',
        capital: 'Sao Paulo',
    },
    {
        estado: 'Minas Gerais',
        capital: 'Belo Horizonte',
    },
    {
        estado: 'Rio Grande do Sul',
        capital: 'Santa Catarina',
    }
]
    const Capital = Estados.map (Estados => `A capital de ${Estados.estado} é ${Estados.capital}`)
    console.log(Capital)