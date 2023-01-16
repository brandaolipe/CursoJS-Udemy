const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

// Atribuição via desestruturação
//           |    variáveis    |          |       variáveis      |
const { nome: teste, sobrenome, endereco: {rua, numero}, endereco} = pessoa

console.log(teste, rua, numero, endereco)