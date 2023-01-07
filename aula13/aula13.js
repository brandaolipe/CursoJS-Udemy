let umaString = "Um \"texto\""  //  Um "texto"

umaString = "Um \\texto"  // Um \texto

//As strings tem indices começando de 0
//           01234567
umaString = "Um texto"
console.log(umaString[4]) // e

console.log(umaString[8]) // undefined

console.log(umaString.indexOf('texto')) // Palavra começa no indice 3, se não existisse retornaria -1

console.log(umaString.indexOf('Um',3)) // Procurando palavra a partir do index 3.

console.log(umaString.lastIndexOf('t'))// começa a busca a partir do final para o começo

console.log(umaString.match(/[a-z]/g)) // [ 'm', 't', 'e', 'x', 't', 'o' ]

// Tem o .search que é parecido com o indexOf só que aceita regEx

console.log(umaString.replace('Um', 'Outro')) // Troca 'Um' para 'Outro'

console.log(umaString.length)

// Pode usar o .slice() e o .substring() para cortar um pedaço da string.
console.log(umaString.slice(3 ,6))

let frase = "O rato roeu a roupa do rei de roma."

console.log(frase.split(' '))// ['O','rato','roeu','a','roupa','do','rei','de','roma.']
console.log(frase.split(' ', 3)) // [ 'O', 'rato', 'roeu' ]

console.log(frase.toUpperCase()) // Para colocar tudo em maiusculas.

console.log(frase.toLowerCase()) // Tudo para minúsculas

