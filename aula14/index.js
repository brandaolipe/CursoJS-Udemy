// IEEE 754-2008
let num1 = 0.7    // Number
let num2 = 0.1 //  Number

// console.log(num1.toString() + num2);
// num1 = num1.toString()
// console.log(num1.toString(2)) @@ .toString(2) vai mostrar a representação binária.
//console.log(num1.toFixed(2))
//console.log(Number.isInteger(num1)) - Vai retornar true or false

//let temp = num1 + '5'
//console.log(Number.isNaN(temp))

num1 += num2
num1 += num2
num1 += num2

num1 = Number(num1.toFixed(2))

console.log(num1)
console.log(Number.isInteger(num1))