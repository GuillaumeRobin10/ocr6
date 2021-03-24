import requests
import json
from operator import itemgetter


def requesting_json(page_request, data):
    request_contain = requests.get(page_request)
    data.extend(json.loads(request_contain.text)["results"])


def looping(page, results):
    requesting_json(page, results)
    requesting_json(page+"&page=2", results)


def seven_win(data):
    new_list = sorted(data, key=itemgetter('imdb_score'), reverse=True)
    ok_list = new_list[0:7]
    return ok_list


def requesting(page_to_request):
    results = []
    looping(page_to_request, results)
    ok = seven_win(results)
    return ok
