const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Felipe' },
    { id: 1, nome: 'Luana' },
]

// const novasPessoas = {}
// for (const pessoa of pessoas) {
//     const {id} = pessoa
//     novasPessoas[id] = {...pessoa}   
// }

const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const {id} = pessoa
    novasPessoas.set(id, {...pessoa})
}

// for (const [identifier, { id, nome}] of novasPessoas) {
//     console.log(identifier, id, nome)
// }

// for(const pessoas of novasPessoas.keys()) {
//     console.log(pessoas)
// }

for(const pessoas of novasPessoas) {
    console.log(pessoas)
}