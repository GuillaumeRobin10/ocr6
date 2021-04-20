import requests



class Search:

    def __init__(self,url,params={},film_identity=""):
        """
        :params genre: gender you want request
        :params increment: a number
        """
        self.url = url
        self.next_page = ""
        self.film_identity = film_identity
        if self.film_identity == "":
            self.params = {"sort_by": "-imdb_score","format":"json"}
            self.params.update(params)
        else:
            self.params = params

 
    def response(self,yes=True):
        """
        request api according to the url and params
        """
        if yes:
            response = requests.get(self.url, params=self.params)
        else:
            self.url += f"{self.film_identity}"
            response = requests.get(self.url,params={"format":"json"})
        if response.ok:
            return response.json()
    

    def results(self):
        r = self.response()
        self.next_page = r["next"]
        return r["results"]
    
    def next(self):
        """
        set the next page url
        """
        self.url = self.next_page

    @property
    def get_fils_img(self):
        """
        return a list of film id and img
        """
        films={}
        i = 1
        for y in range(2):
            result = self.results()
            for film in result:
                films.update({f"film{i}":{'film_id':film["id"],'film_img': film["image_url"],'title': film["title"]}})
                i += 1
            self.next()
        return films
    
    @property
    def get_film_info(self):
        film_info = self.response(yes=False)
        return film_info

