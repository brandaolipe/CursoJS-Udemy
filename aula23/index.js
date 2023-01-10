/*
&& -> false && true -> false "o valor mesmo"
||

FALSY - Valores considerados como falsos
false
0
'' "" ``
null / undefined
NaN
*/

// console.log(0 || false || null || 'Luiz Otávio' || true)

const corUsuario = 'vermelho'
const corPadrao = corUsuario || 'preto'

console.log(corPadrao)
