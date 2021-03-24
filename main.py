from flask import Flask, render_template
from request_api import requesting
PAGE1 = "http://127.0.0.1:8000/api/v1/titles/?format=json&genre=Romance"
PAGE2 = "http://127.0.0.1:8000/api/v1/titles/?format=json&genre=Action"
PAGE3 = "http://127.0.0.1:8000/api/v1/titles/?format=json&genre=Animation"
app = Flask(__name__)


@app.route('/')
def main():
    films1 = requesting(PAGE1)
    films2 = requesting(PAGE2)
    films3 = requesting(PAGE3)
    return render_template("index.html", films1=films1, films2=films2, films3=films3)
