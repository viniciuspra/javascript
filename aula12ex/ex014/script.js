function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var box = document.getElementById('box')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} Hora da manha`
        img.src = 'img/dia.png'
        document.body.style.background = '#D9B26A'
        box.style.background = '#DFCFB0'
    }else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Agora são ${hora} Horas da tarde`
        img.src = 'img/tarde.png'
        document.body.style.background = '#64818C'
        box.style.background = '#B8D0D9'
    }else {
        msg.innerHTML = `Agora são ${hora} Horas da noite`
        img.src = 'img/noite.png'
        document.body.style.background = '#323240'
        box.style.background = '#636573'
    }

}
