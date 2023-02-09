function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Cai no erro.');
                return;
            }      

            resolve(msg.toUpperCase() + '- Passei na promise.');
        }, tempo);    
    })
}

// Promise.all Promise.race Promise.resolve Promise.reject

// const promises = [
//     'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     //esperaAi(1000, 1000),
//     'Outro valor'
// ]

// Promise.all(promises)
//     .then(function(valor) {
//         console.log(valor);
//     })
//     .catch(function(erro){
//         console.log(erro);
//     })

//promises.race - vai retornar a primeira promise resolvida.



//-------------- Promise.resolve / Promise.reject------------------------

function baixaPagina() {
    const emCache = true;

    if(emCache){     //.resolve
        return Promise.reject('Página em Cache')
    }else{
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch((e) => console.log('Erro', e))