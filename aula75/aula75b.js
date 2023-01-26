function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(porcentagem){
   return this.preco = this.preco - (this.preco * (porcentagem / 100))
}

Produto.prototype.aumento = function(porcentagem){
    return this.preco = this.preco + (this.preco * (porcentagem / 100))
 }

const p1 = new Produto('Camiseta', 50)
console.log(p1.desconto(10))