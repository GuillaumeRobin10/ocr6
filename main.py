from flask import Flask, render_template
from flask_cors import CORS
from request_api import Search
app = Flask(__name__)
CORS(app)

@app.route('/notheme')
def rooting1():
    requesting = Search("http://127.0.0.1:8000/api/v1/titles/")
    return requesting.get_fils_img


@app.route('/genre/<genre>')
def rooting(genre):
    requesting = Search("http://127.0.0.1:8000/api/v1/titles/",{"genre": genre})
    return requesting.get_fils_img


@app.route('/film/<identity>')
def rooting2(identity):
    requesting = Search("http://127.0.0.1:8000/api/v1/titles/",film_identity=identity)
    return requesting.get_film_info


@app.route('/')
def index():
    return render_template('index.html')
