function contar() {
    var inum = document.getElementById('inum')
    var fnum = document.getElementById('fnum')
    var pass = document.getElementById('pass')
    var res = document.getElementById('res')
    res.innerHTML = ''
    if (inum.value.length == 0 || fnum.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossivel contar! Tente Novamente'
    } else {
        let i = Number(inum.value)
        let f = Number(fnum.value)
        let p = Number(pass.value)
        
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#x27A1; `
            }
            res.innerHTML += '&#x1F6A9'
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML -= `${c} &#x27A1; `
            }
            res.innerHTML += '&#x1F6A9'
        }
    }