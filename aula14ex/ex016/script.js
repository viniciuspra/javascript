function contar() {
    let inum = document.getElementById('inum')
    let fnum = document.getElementById('fnum')
    let pass = document.getElementById('pass')
    let res = document.getElementById('res')
    if (inum.value.length == 0 || fnum.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossivel contar! Tente Novamente'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inum.value)
        let f = Number(fnum.value)
        let p = Number(pass.value)
        if (p <= 0) {
            alert('[ERRO] Passo inválido! Considerando Passo = 1 ')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#x27A1; `
            }
            res.innerHTML += '&#x1F6A9'
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} &#x27A1; `
            }
            res.innerHTML += '&#x1F6A9'
        }
    }
}