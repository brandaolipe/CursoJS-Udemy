/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Produto x', preco: 26.80}
//const caneca = {nome: produto.nome, preco: produto.preco}

// spread ------------------------------------------------------------------
// const caneca = {
//     ...produto,
//     material: 'porcelana'
// }

// Object.assign(des, any) -------------------------------------------------
const caneca = Object.assign({}, produto, { material: 'porcelana'})

// caneca.nome = 'Outra coisa'
// caneca.preco = 45.5
// console.log(produto)
// console.log(caneca)

//console.log(Object.keys(produto)) // Object.keys

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
//console.log(produto)

//=====================================================================

const obra = {Projeto: 'Milhão', valor: 1000000}

// console.log(Object.keys(obra))
// console.log('-----------------------')
// console.log(Object.values(obra))
// console.log('-----------------------')
// console.log(Object.entries(obra))

for (let entries of Object.entries(obra)){
    console.log(entries[0], entries[1])
}
