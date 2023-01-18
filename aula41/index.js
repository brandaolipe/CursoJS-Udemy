// Escreva uma função que recebe 2 números e retorne o maior deles

// -------------- 1° Versão ------------------

//function maior(x, y) {
//    if (x > y) {
//        return x     
//    }
//    return y
//}

//console.log(maior(50,300))

// -------------- 2° Versão ------------------

// function maior(x, y) {
//    if (x > y) return x     
//    return y
// }


// console.log(maior(5, 3))


// -------------- 3° Versão ------------------

// function maior(x, y) {
//     return x > y ? x : y
// }
 

//  console.log(maior(5, 30))

// -------------- 4° Versão ------------------
// arrow function com apenas uma linha não precisa das chaves nem da palavra 'return'.

const maior = (x, y) =>  x > y ? x : y

 
 console.log(maior(5, 30))