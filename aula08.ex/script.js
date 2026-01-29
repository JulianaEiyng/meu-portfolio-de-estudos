function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        // --- LINHAS PARA DIMINUIR A FOTO ---
        img.style.width = '150px' 
        img.style.height = '150px'
        img.style.borderRadius = '50%' // Deixa redondinha igual ao vídeo
        img.style.marginTop = '10px'
        // ----------------------------------

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto 3.PNG')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto 2.PNG')
            } else if (idade < 50) {
            } else {
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotomanha.PNG') 
            } else if (idade < 21) {
                img.setAttribute('src', 'foto 4.PNG')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto 1.PNG')
            } else {

            }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
