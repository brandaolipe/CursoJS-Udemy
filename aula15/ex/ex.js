const num = Number(prompt('Digite um número:'))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = num
texto.innerHTML = `Raiz quadrada: ${num ** (1/2)} <br>`
texto.innerHTML += `${num} é inteiro: ${Number.isInteger(num)} <br>`
texto.innerHTML += `É NaN: ${isNaN(num)} <br>`
texto.innerHTML += `Arredondando para baixo: ${Math.floor(num)} <br>`
texto.innerHTML += `Arredondando para cima: ${Math.ceil(num)} <br>`
texto.innerHTML += `Com duas casas decimais: ${num.toFixed(2)}`
