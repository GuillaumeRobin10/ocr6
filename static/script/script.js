window.onload=function(){
    fetch("http://localhost:8000/api/v1/titles/?format=json&year=2000")
        .then(function(response){
        if (!response.ok){
            throw new Error('HTTP Error, Status =' + response.status);
        }
        return response.json();
    })
    .then(function(json){
        console.log(json);
    });
};
/*
faire avec flask
créer un classe qui communique entre flash et l'API film
class film (catégorie=api catégorie):
    self.catégorie = catégorie
*/ 
