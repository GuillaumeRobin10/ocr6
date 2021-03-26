from flask import Flask, render_template
from request_api import requesting
app = Flask(__name__)

HOME ="http://127.0.0.1:8000/api/v1/titles/?format=json&genre="
end = "&imdb_score_min=8&sort_by=+-imdb_score"
Theme1 = "Romance"
Theme2 = "Action"
Theme3 = "Drama"


@app.route('/')
def main():
    best_film = requesting(HOME + end, True, True)
    best_films = requesting(HOME + end, True)
    theme1_film = requesting(HOME + Theme1 + end)
    theme2_film = requesting(HOME + Theme2 + end)
    theme3_film = requesting(HOME + Theme3 + end)
    return render_template("index.html",
                           best_film=best_film,
                           best_films=best_films,
                           theme1_film=theme1_film,
                           theme2_film=theme2_film,
                           theme3_film=theme3_film,
                           theme1=Theme1,
                           theme2=Theme2,
                           theme3=Theme3
                           )
