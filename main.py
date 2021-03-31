from flask import Flask,render_template
from request_api import get_films_info
from setting import HEADERS
app = Flask(__name__)


@app.route('/notheme')
def rooting1():
    return get_films_info(),HEADERS


@app.route('/<genre>')
def rooting(genre):
    return get_films_info(genre),HEADERS
    
@app.route('/')
def index():
    return render_template('index.html')
