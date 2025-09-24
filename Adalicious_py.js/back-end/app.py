# Importation des modules nécessaires
from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
import json

# Crée une instance de l'application Flask
app = Flask(__name__)

# Active CORS pour l'origine spécifiée
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})

# Charge les données du fichier JSON
def load_menu_data():
    try:
        with open("menu.json", "r", encoding="utf-8") as file:
            data = json.load(file)
    except FileNotFoundError:
        print("Erreur : Le fichier menu.json est introuvable.")
        data = []  # Gère le cas où le fichier n'existe pas
    return data

# Route pour la page d'accueil
# C'est la seule et unique fonction qui gère la route '/'
@app.route('/')
def index():
    return render_template('index.html')
#http://localhost:5000/

@app.route('/menu')
def menu_page():
    customer = request.args.get('customer', '')
    menu = load_menu_data()
    return render_template('menu.html', menu=menu, customer=customer)

# Route pour obtenir tout le menu
@app.route('/api/menu', methods=['GET'])
#http://localhost:3000/api/menu
def get_menu_json():
    menu = load_menu_data()  # Correction : charge les données ici
    return jsonify(menu)

# Lance le serveur
if __name__ == '__main__':
    app.run(port=5000, debug=True)
