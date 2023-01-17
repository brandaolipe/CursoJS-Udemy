// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

const nomes = ['Felipe', 'Gabriela', 'Letícia']

for(let valor of nomes){
    console.log(valor)
}

// for (let i in nomes){
//     console.log(nomes[i])
// }

// for (let i = 0; i < nomes.length; i++){
//     console.log(nomes[i])
// }

console.log('####')

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})


//Com objetos funciona o For in
const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Brandão'
}

for (key in pessoa){
    console.log(key, pessoa[key])
}