/*
Primitivos (imutáveis) - String, number, boolean, undefined, null, (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/
//let a = [1, 2, 3]
//let b = a // Para copiar precisa usar let b = [...a]
//console.log(a, b)

//a.push(4)
//console.log(a,b)

//b.push(5)
//console.log(a,b)
//   ------------------------------------------------------------- //
const c = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
const d = c // Para copiar invés de referenciar: cont d = {...c}

c.nome = 'João'
console.log(d)

