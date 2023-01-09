function soma(x = 0, y = 0){
   const resultado = x + y
   return resultado // Tudo que for escrito abaixo desse return não será //executado.
}

const resultado = soma(3)
console.log(resultado)

//const raiz = function (n){
//    return n ** 0.5
//}

const raiz = n => n ** 0.5 // Arrow function

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))