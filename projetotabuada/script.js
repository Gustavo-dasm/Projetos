function Tabuada() {
    var num = window.document.getElementById('txtn')
    var t = window.document.getElementById('seltab')

    if (Number(num.value.length == 0)) {
        window.alert('Digite um número!')
        t.innerHTML = ''
    } else {
        var n = Number(num.value)
        c = 1
        t.innerHTML = ''
        while (c <=10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `t${c}`
            t.appendChild(item)
            c++
        }
    }
    

}