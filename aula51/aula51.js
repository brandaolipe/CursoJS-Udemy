// return
// Retorna um valor
// Termina a função
function soma (a,b){
    return a + b
}

//---------------------------------
function criaPessoa(nome, sobrenome){
    return {nome, sobrenome}
}

const p1 = criaPessoa('Luiz', 'Otávio')
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
}

console.log(typeof p1, typeof p2)
//-----------------------------------