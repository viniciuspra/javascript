function adicionar() {
    let num = document.getElementById('txtnum')
    let array = []
    let n = Number(num.value)
    if (num.value.length == 0 || n < 1 || n > 100) { 
        alert('Valor invalido ou já encontrado na lista')
    }else {
        array.push(n)
    }
}
