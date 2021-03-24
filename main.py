from flask import Flask, render_template
from request_api import requesting
app = Flask(__name__)

HOME ="http://127.0.0.1:8000/api/v1/titles/?format=json"
end = "&imdb_score_min=8&sort_by=+-imdb_score"
Theme1 = "&genre=Romance"
Theme2 = "&genre=Action"
Theme3 = "&genre=Drama"

@app.route('/')
def main():
    best_film = requesting(HOME+end)
    films1 = requesting(HOME+Theme1+end)
    films2 = requesting(HOME + Theme2 + end)
    films3 = requesting(HOME + Theme3 + end)
    return render_template("index.html", best_film=best_film, films1=films1,films2=films2,films3=films3)
