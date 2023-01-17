// For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Brandão',
    idade: 28
}

for (let key in pessoa) {
    console.log(key, pessoa[key])
}


// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }