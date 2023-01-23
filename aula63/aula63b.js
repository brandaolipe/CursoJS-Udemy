//               -5       -4       -3         -2         -1 
//                0        1        2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// nomes.splice(indice atual, delete, elem1, elem2, elem3...);
//pop - remover do final
//const removidos = nomes.splice(-1, 1) 

//shift - remover do começo
//const removidos = nomes.splice(0, 1)

//push - adicionar no final
//nomes.splice(nomes.length, 0, 'Luiz')

//unshift - adicionar no começo
nomes.splice(0, 0, 'Marcela')

console.log(nomes)
