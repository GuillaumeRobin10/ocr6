import requests
from setting import HOME,SETTING


def requesting_api(genre, increment=1):
    SETTING.update({"genre": genre,"page": increment})
    response = requests.get(HOME, params=SETTING)
    if response.ok:
        return response.json()
    else:
        print("can't reach api")


def get_film_url(films, response):
    for film in response["results"]:
        films.append(film["url"])
    return films


def get_best_film_of_a_category(genre):
    films = []
    for increment in range(1, 3):
        response = requesting_api(genre, increment)
        films = get_film_url(films, response)
    return films


def get_films_info(genre=""):
    films = get_best_film_of_a_category(genre)
    json_films = {}
    i = 1
    for film in films:
        json_films.update({f"film{i}": requests.get(film).json()})
        i += 1
    return json_films
