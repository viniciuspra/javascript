let num = document.getElementById('txtnum')
let tab = document.getElementById('sel')
let res = document.getElementById('res')
let array = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, array)) { 
        array.push()
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
    }else {
        alert('Valor invalido ou já encontrado na lista')
    }

}
