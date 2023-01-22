// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados
    const ID = 123456
    const metodoInterno = function(){

    }

    //Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () => console.log(this.nome + ': sou um método.')
}

const p1 = new Pessoa('Felipe', 'Brandão')
const p2 = new Pessoa('Luiz', 'Otávio')

console.log(p1, p2)
p1.metodo()