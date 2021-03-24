import requests
import json


def requesting(page):
    r = requests.get(page)
    results = json.loads(r.text)["results"]
    return results
