import requests
import json
from operator import itemgetter


def requesting_film_url(page_request, films):
    request_contain = requests.get(page_request)
    a = json.loads(request_contain.text)["results"]
    for film in a:
        films.append(film["url"])


def looping(page, results):
    requesting_film_url(page, results)
    requesting_film_url(page + "&page=2", results)


def seven_win(data, best, solo):
    if best:
        if solo:
            ok_list = data[0]
        else:
            ok_list = data[1:8]

    else:
        ok_list = data[0:7]
    return ok_list


def get_info(page_request, real_data):
    real_data.append(json.loads((requests.get(page_request)).text))


def requesting(page_to_request, best=False, solo=False):
    results = []
    rest = []
    looping(page_to_request, results)
    ok = seven_win(results, best, solo)
    if solo:
        get_info(ok,rest)
    else:
        for film_url in ok:
            get_info(film_url, rest)
    return rest
