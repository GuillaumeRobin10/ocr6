from flask import Flask
from api.request_api import get_films_info
from api.setting import HEADERS
app = Flask(__name__)


@app.route('/notheme')
def rooting1():
    return get_films_info(),HEADERS


@app.route('/<genre>')
def rooting(genre):
    return get_films_info(genre),HEADERS
