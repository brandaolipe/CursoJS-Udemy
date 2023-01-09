//                  Objetos
//const pessoa1 = {
//    nome: 'Luiz', 
//    sobrenome: 'Miranda',
//   idade: 25
//}
//console.log(pessoa1.nome)
                    // Parâmetros                      
function criaPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade }
}
                            // Argumentos
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25)
const pessoa2 = criaPessoa('Débora', 'Lima', 29)
const pessoa3 = criaPessoa('Luana', 'Barreto', 31)

console.log(pessoa1.nome)
console.log(pessoa2.nome)
console.log(pessoa3.nome)