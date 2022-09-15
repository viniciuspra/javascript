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
        array.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista. ')
    }
    txtnum.value = ''
    txtnum.focus()
}

function finalizar() {
    if (array.length == 0) {
        alert('Valores não informado')
    } else {
        let tot = array.length
        let maior = array[0]
        let menor = array[0]
        let media = 0
        let soma = 0
        for(let pos in array) {
            soma += array[pos]
            if (array[pos] > maior) 
                maior = array[pos]
            if (array[pos] < menor)
                menor = array[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números atualizados</p>`
        res.innerHTML += `<p>O MAIOR valor informado é ${maior}.</p>`
        res.innerHTML += `<p>O MENOR valor informado é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos o valores é ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores é ${media}.</p>`

    }
}
