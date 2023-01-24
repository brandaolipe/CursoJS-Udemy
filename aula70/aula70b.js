// Factory functions / Constructor function / Classes

// // Factory function
// function criaPessoa(nome, sobrenome) {
//     return{
//         nome,
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('Luiz', 'Otávio')
// console.log(p1.nomeCompleto)

//---------------------------------------------------------------

// Constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this)
}

// {} <- this -> this
const p1 = new Pessoa('Luiz', 'Miranda')
p1.nome = 'Outro'
p1.sobrenome = 'Qualquer coisa'
console.log(p1)

