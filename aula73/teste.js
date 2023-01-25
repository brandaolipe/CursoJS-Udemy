const carro1 = {
    modelo: 'mercedes',
    ano: 2023,
    combustivel: 'gasolina'
}

let carro2 = {
    modelo: 'ferrari',
    ano: 2020,
    combustivel: 'gasolina'
}
Object.freeze(carro2)
carro2 = Object.assign({}, carro1)

console.log(carro2)
