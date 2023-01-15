const display = document.querySelector('.visor')
const data = new Date()
let opcoes = { dateStyle:'full', timeStyle:'short' }

display.innerHTML = data.toLocaleString('pt-BR', opcoes)


// const display = document.querySelector('.visor')

// const data = new Date()
// const diaSemana = data.getDay()
// const diaSemanaTexto = getDiaSemanaTexto(diaSemana)
// const mes = data.getMonth()
// const mesEscrito = getMesEscrito(mes)

// const dataDisplay = formataData(data)

// display.innerHTML = dataDisplay

// function getMesEscrito (mes){
//   const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

//   return meses[mes]
// }

// function getDiaSemanaTexto(dia){
//     let diaSemanaTexto

//     switch (dia) { 
//         case 0:
//             diaSemanaTexto = 'Domingo'
//             return diaSemanaTexto
//         case 1:
//             diaSemanaTexto = 'Segunda-feira'
//             return diaSemanaTexto
//         case 2:
//             diaSemanaTexto = 'Terça-feira'
//             return diaSemanaTexto
//         case 3:
//             diaSemanaTexto = 'Quarta-feira'
//             return diaSemanaTexto
//         case 4:
//             diaSemanaTexto = 'Quinta-feira'
//             return diaSemanaTexto
//         case 5:
//             diaSemanaTexto = 'Sexta-feira'
//             return diaSemanaTexto
//         case 6:
//             diaSemanaTexto = 'Sábado'
//             return diaSemanaTexto                       
//         default:
//             diaSemanaTexto = ''
//             return diaSemanaTexto
//     }
// }

// function zeroAEsquerda (num){
//     return num >= 10 ? num : `0${num}`
// }

// function formataData(data){
//     const ano = data.getFullYear()
//     const dia = data.getDate() 
//     const hora = zeroAEsquerda(data.getHours())
//     const min = zeroAEsquerda(data.getMinutes())

//     return `${diaSemanaTexto}, ${dia} de ${mesEscrito} de ${ano} ${hora}:${min}`
// }