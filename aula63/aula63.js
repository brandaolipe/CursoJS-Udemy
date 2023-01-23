//               -5       -4       -3         -2         -1 
//                0        1        2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// nomes.splice(indice, delete, elem1, elem2, elem3);

//const removidos = nomes.splice(-2, Number.MAX_VALUE) 
// O método splice retorna um array dos removidos
console.log(nomes)
//console.log(removidos)
console.log(Number.MAX_VALUE)

nomes.splice(2, 0, 'Felipe') // Vai adicionar no índice 2.
nomes.splice(3, 1, 'Samuel') // Vai retirar o 3 e adicionar 'Samuel'
console.log(nomes)
