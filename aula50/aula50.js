// Função definida com a palavra function, tem uma variável
// especial arguments que sustenta todos os argumentos enviados.
// Não da para usar arguments com arrow function
function funcao(a, b, c){
    let total = 0
    for (let argumento of arguments){
        total += argumento
    }
    console.log(total, a, b, c)
}
funcao(1, 2, 3, 4, 5, 6, 7)
//---------------------------------------------------
function soma (a, b = 2, c = 4){
    console.log(a + b + c)
}
soma(2, undefined, 20)
//--------------------------------------------------
function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
       if (operador === '+') acumulador += numero
       if (operador === '-') acumulador -= numero
       if (operador === '/') acumulador /= numero
       if (operador === '*') acumulador *= numero
    }
    console.log(numeros)
    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50)