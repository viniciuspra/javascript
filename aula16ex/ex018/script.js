function adicionar() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('sel')
    let t = 
    let n = Number(num.value)
    for (let c = 0; c)
    if (n < 1 || n > 100 || n.length == 0) {
        alert('valor invalido')
    }else {
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        tab.appendChild(item)
    }
    
    let c = 0
    let val[c] = n 
    alert(val)
    c++
    console.log(val)
}
