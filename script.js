function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas. `
    if(hora >= 0 && hora < 12){
        //Bom Dia
        txt.innerHTML = `Bom dia`
        img.src = 'img/birds2.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //Boa Tarde
        txt.innerHTML = 'Boa Tarde'
        img.src = 'img/paris.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //Boa Noite
        img.src = 'img/audi.jpg'
        txt.innerHTML = 'Boa Noite'
        document.body.style.background = '#515154'
    }
 }