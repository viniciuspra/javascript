function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.padding = '15px'

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'image/menino.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'image/jovem-h.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'image/homem.png')
            } else if (idade < 120) {
                img.setAttribute('src', 'image/idoso.png')          
            } else {
                img.setAttribute('src', 'image/caveira.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'image/menina.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'image/jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'image/mulher.png')
            } else if (idade < 120) {
                img.setAttribute('src', 'image/idosa.png')          
            } else {
                img.setAttribute('src', 'image/caveira.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}