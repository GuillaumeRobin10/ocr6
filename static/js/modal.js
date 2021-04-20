let modal =null

const createasidemodal = function(film){
    let aside = document.createElement("aside")
    aside.className = "modal hidden"
    aside.id = 'film'+film["id"]
    let blockaside = document.getElementById("aside")
    blockaside.appendChild(aside)
    let div = document.createElement("div")
    div.className = "modal_wrapper"
    aside.appendChild(div)
    let button = document.createElement('button')
    button.className='js-modal-close'
    button.innerHTML = "Fermer"
    div.appendChild(button)
    let img = document.createElement("img")
    img.src = film["image_url"]
    img.className = "float"
    let p = document.createElement("p")
    let nling = "</br>"
    let a ="Titre du film : " + film["title"]+nling+nling+
        "Genre du film : " +film["genres"]+nling+nling+
        "Date de sortie : " + film["date_published"]+nling+nling+
        "Rated : " + film["rated"]+nling+nling+
        "Score Imdb : " + film["imdb_score"]+nling+nling+
        "Réalisateur : "+ film["directors"] + nling+nling+
        "Acteurs : "+ film["actors"] + nling+nling+
        "Durée : " + film["duration"] + " minutes"+nling+nling+
        "Pays d’origine : "+ film["contries"]+nling+nling+
        "Résultat au Box Office : "+ film["budget"] +" " + film['budget_currency']+nling+
        "Résumé du film : " + film["long_description"]
    p.innerHTML = a
    div.appendChild(img)
    div.appendChild(p)

}

const test = async function(e){
    let targeting = document.querySelector(e.target.getAttribute('id'))
    if (targeting == null){
        var identity = e.target.getAttribute('id')
        var id = identity.slice(5)
        url_to_requesting = "http://127.0.0.1:5000/film/"+id
        let response2 = await fetch(url_to_requesting)
        let info_film = await response2.json()
        createasidemodal(info_film)
    }
}


const openModal = function (e){
    test(e)
    setTimeout(function(){
        e.preventDefault()
        const target = document.querySelector(e.target.getAttribute('id'))
        target.removeAttribute('class')
        target.setAttribute('class','modal')
        target.style.display = null
        modal = target
        modal.querySelector('.js-modal-close').addEventListener('click',closeModal)

    },
    200);
}

const closeModal = function (e){
    if (modal === null) return
    e.preventDefault()
    modal.setAttribute('class',"hidden")
    modal.querySelector('.js-modal-close').removeEventListener('click',closeModal)
    modal = null
}


setTimeout(function(){
    document.querySelectorAll('.js-modal').forEach(a => {
        a.addEventListener('click',openModal)
        
    })
},
      1500);
