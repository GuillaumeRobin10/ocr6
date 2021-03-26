# site web de JustStreamIt



## Fonctionnement

afin de lancer site vous devez suivre les étapes indiquées pour votre système d'exploitation



##installer python
telecharger [python](https://www.python.org/downloads/ "python") et installez-le en suivant les instructions.

##installer et lancer l'api
rendez-vous sur  [l'api](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR "l'api") , suivez les instructions pour installer l'api et lancez la



#### Windows
1. rendez-vous dans le dossier ou ce situe le programme
2. Tout en maintenant la touche Maj ⇧ enfoncée, faites un clic droit et sélectionnez Ouvrir la fenêtre PowerShell ici.
3. entrez la commande : ``pip install virtualenv``
4. entrez la commande : ``virtualenv -p $env:python3 env``
5. entrez la commande : ``./env/scripts/activate.ps1``
6. entrez la commande : ``pip install -r requirements.txt``
7. entrez la commande : ``export FLASK_APP=main.py``
8. entrez la commande : ``export FLASK_ENV=development``
9. entrez la commande : ``flask run``
10. ouvrir le lien générer
 
#### linux/mac

1. ouvrir le terminal (vous pouvez trouver l'outil directement en tapant “terminal” dans la barre de recherche des applications.(finder sous mac))
2. entrez la commande : ``pip3 install virtualenv``
3. entrez la commande : ``virtualenv -p python3 env``
4. Rendez vous dans le dossier du site (commande cd)
5. entrez la commande :``source env/bin/activate``
6. entrez la commande : ``pip3 install -r requirements.txt``
7. entrez la commande : ``export FLASK_APP=main.py``
8. entrez la commande : ``export FLASK_ENV=development``
9. entrez la commande : ``flask run``
10. ouvrir le lien générer