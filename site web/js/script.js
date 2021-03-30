
url1 = "http://127.0.0.1:5000/notheme"
url2 = "http://127.0.0.1:5000/drama"
url3 = "http://127.0.0.1:5000/romance"
url4 = "http://127.0.0.1:5000/action"

const createasidemodal = function(idcarousel,film){
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
    let p = document.createElement("p")
    let nling = "</br>"
    let a ="Titre du film : " + film["title"]+nling+
        "Genre du film : " +film["genres"]+nling+
        "Date de sortie : " + film["date_published"]+nling+
        "Rated : " + film["rated"]+nling+
        "Score Imdb : " + film["imdb_score"]+nling+
        "Réalisateur : "+ film["directors"] + nling+
        "Acteurs : "+ film["actors"] + nling+
        "Durée : " + film["duration"] + " minutes"+nling+
        "Pays d’origine : "+ film["contries"]+nling+
        "Résultat au Box Office : "+ film["budget"] +" " + film['budget_currency']+nling+
        "Résumé du film : " + film["long_description"]
    p.innerHTML = a
    div.appendChild(p)
}

const createImgInDiv = function(idblock,filmurl,filmid){
    let img = document.createElement("img")
    img.id = "#film" +filmid
    img.src = filmurl
    let block = document.getElementById(idblock);
    block.appendChild(img); 
}
const creatAFilm = function(idcarousel,filmurl,filmid){
    let div = document.createElement("div")
    div.className = "itemImage"
    let block2 = document.getElementById(idcarousel)
    block2.appendChild(div)
    let a = document.createElement("a")
    a.className = "js-modal"
    a.id='#f'+idcarousel+filmid
    a.href = '#'
    div.appendChild(a)
    createImgInDiv(a.id,filmurl,filmid)   
}

const best_film = async function(url){
    let response = await fetch(url)
    let film_data = await response.json()
    let h3 = document.createElement("h3")
    h3.innerHTML=film_data["film1"]["title"]
    let block1 = document.getElementById("best_film_title")
    block1.appendChild(h3)
    createImgInDiv("best_film_img",film_data["film1"]["image_url"],film_data["film1"]["id"])
    createasidemodal("best_film_img",film_data["film1"])

}

const bests_film = async function(url){
    let response = await fetch(url)
    let film_data = await response.json()
    for (let i=2; i <= 8; i++){
        creatAFilm("carouselbest",film_data["film"+i]["image_url"],film_data["film"+i]["id"])
        createasidemodal("carouselbest",film_data["film"+i])

    }
}
const theme_film = async function(url,theme){
    let response = await fetch(url)
    let film_data = await response.json()
    for (let i=1; i <= 7; i++){
        creatAFilm(theme,film_data["film"+i]["image_url"],film_data["film"+i]["id"])
        createasidemodal(theme,film_data["film"+i])
    }
}


best_film(url1)
bests_film(url1)             
theme_film(url2,"theme1")
theme_film(url3,"theme2")
theme_film(url4,"theme3")



