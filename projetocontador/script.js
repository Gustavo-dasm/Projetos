function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (Number(ini.value.length) == 0 || Number(fim.value.length) == 0 || Number(passo.value.length) == 0) {
        res.innerHTML = 'impossivel contar'
        window.alert('[ERRO] faltam dados!')
  
    } else {
       res.innerHTML = 'Contando: <br>'
       var i = Number(ini.value) 
       var f = Number(fim.value)
       var p = Number(passo.value)
       if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
       }
       if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            //contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
               res.innerHTML += `\u{1f3c1}`
    }
}