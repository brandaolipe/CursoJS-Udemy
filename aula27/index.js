//(condição) ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 1600
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP':'Usuário normal'

// "Setando um valor padão para uma variavel"
const corUsuario = null
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao)