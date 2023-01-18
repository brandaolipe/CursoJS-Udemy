// try {
//     // É executada quando não há erros.
// } catch(e){
//     // É executada quando há erros.
// } finally {
//     // Sempre
// }

try {
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')

    try{
        console.log(b)
    } catch (e) {
        console.log('Deu erro')
    } finally{
        console.log('Também sou finally.')
    }

} catch(e){
    console.log('Tratando o erro')
} finally {
    console.log('FINALLY: Eu sempre sou executado')
}