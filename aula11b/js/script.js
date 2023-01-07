/*
window.alert('Com a nossa mensagem.')
window.confirm('Deseja realmente apagar?') //'ok' retorna true, 'cancelar' retorna false.
window.prompt('Digite o eu nome:')
*/

let numero1 = prompt('Digite o primeiro número: ')
let numero2 = prompt('Digite o segundo número: ')

let resultado = Number(numero1) + +numero2

alert(`O resultado da soma entre ${numero1} e ${numero2} é ${resultado}.`)