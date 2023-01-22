//Essa é uma Factory function (Função fábrica)
// ainda vamos aprender a Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome: nome,

        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        fala: function(assunto = 'sobre NADA'){
            return `${this.nome} está falando ${assunto}.`
        },

        altura,

        peso,
        
        //Getter - transformou a função imc em um atributo do objeto.
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return `O imc de ${this.nome} é ${indice.toFixed(2)}`
        }
    }
}

const p1 = criaPessoa('Felipe', 'Brandão', 1.85, 111)

p1.nomeCompleto = 'Maria Oliveira Silva' // Usando setter para mudar nome e sobrenome.

console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())
