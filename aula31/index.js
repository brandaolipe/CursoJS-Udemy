const verdadeira = true

//Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = 'Felipe' // Criando
var nome2 = 'Felipe'// Criando

if (verdadeira) {
    let nome = 'Otávio' //Criando
    var nome2 = 'Rogério' // redeclarando

    if (verdadeira) {
        let nome = 'Outra coisa'//Criando
        var nome2 = 'Ronaldo'  //Redeclarando
    }
}

console.log(nome, nome2)
