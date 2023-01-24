// .reduce()

// Some todos os números
// Retorne uma array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor
    return acumulador
}, 0)

//console.log(total)

const numerosPares = numeros.reduce(function(acumulador, valor){
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])
//console.log(numerosPares) // Filter é muito melhor.

const dobroValores = numeros.reduce(function(a , valor){
    a.push(valor*2)
    return a
}, [])
//console.log(dobroValores) // Map é muito melhor.


// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 77 },
  ];

  const maisVelha = pessoas.reduce(function(a,valor){
    if(a.idade > valor.idade) return a
    return valor
  })
  console.log(maisVelha)

