// .forEach -> Vai iterar em todos os valores de uma array
// funciona com array.

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let total = 0

a1.forEach(function(valor, indice, array) {
    total += valor
})

// for (let valor of a1) {
//     total += valor
// }

console.log(total)