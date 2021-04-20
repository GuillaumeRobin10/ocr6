
url1 = "http://127.0.0.1:5000/notheme"
url2 = "http://127.0.0.1:5000/genre/drama"
url3 = "http://127.0.0.1:5000/genre/romance"
url4 = "http://127.0.0.1:5000/genre/action"


const createImgInDiv = function(idblock,filmurl,filmid){
    let img = document.createElement("img")
    img.id = "#film" +filmid
    img.className = "test"
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
    createImgInDiv("best_film_img",film_data["film1"]["film_img"],film_data["film1"]["film_id"])

}

const bests_film = async function(url){
    let response = await fetch(url)
    let film_data = await response.json()
    for (let i=2; i <= 8; i++){
        creatAFilm("carouselbest",film_data["film"+i]["film_img"],film_data["film"+i]["film_id"])

    }
}
const theme_film = async function(url,theme){
    let response = await fetch(url)
    let film_data = await response.json()
    for (let i=1; i <= 7; i++){
        creatAFilm(theme,film_data["film"+i]["film_img"],film_data["film"+i]["film_id"])
    }
}



best_film(url1)
bests_film(url1)            
theme_film(url2,"theme1")
theme_film(url3,"theme2")
theme_film(url4,"theme3")



