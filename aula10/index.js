/*                  Dados primitivos 
     String, number, undefined, null, boolean, symbol(vai ser visto ainda)                
*/
const nome = 'Luiz'  // string
const nome1 = "Luiz" // string
const nome2 = `Luiz` // string
const num1 = 10 // number
const num2 = 10.52 // number
let nomeAluno // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null // Nulo -> não aponta para local nenhum na memória
const aprovado = true //  Boolean = true, false (lógico)


console.log(typeof sobrenomeAluno, sobrenomeAluno)
// null ser considerado object é um bug da linguagem.

const a = [1, 2]
const b = a

b.push(3)
console.log(a, b)