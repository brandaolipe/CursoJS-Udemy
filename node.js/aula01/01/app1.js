// const mod1 = require('./mod1');
// console.log(mod1.falaNome());


// Podemos usar destructuring:
const { nome, sobrenome, falaNome } = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome());