// Declaração de função (Function hoisting) tanto faz chamar antes
// ou depois de declarar.
falaOi()

function falaOi(){
    console.log('Oi')
}

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function() {
    console.log('Sou um dado.')
}

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao()
}
executaFuncao(souUmDado)


// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...')
    },
    revisar() {
        console.log('Revisar é importante.')
    }
}
obj.falar()