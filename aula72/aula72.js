// defineProperty -> Getter e Setters
// Constructor function
function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        //value: estoque, // valor
        //writable: true, // pode alterar
        configurable: false, // configurável
        get: function(){
            return estoquePrivado
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem')
            } 
            estoquePrivado = valor
        }
    })
}

// Factory function
function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            valor = valor.replace('coisa', '').trim()
            nome = valor
        }
    }
}


//const p1 = new Produto('Camiseta', 20, 3)
//console.log(p1)
//p1.estoque = 'O valor que eu quero.'
// p1.estoque = 2
// console.log(p1.estoque)

const p2 = criaProduto('Camiseta')
p2.nome = 'Qualquer coisa'
console.log(p2.nome)