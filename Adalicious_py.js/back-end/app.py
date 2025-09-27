# Importation des modules nécessaires
from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

# Crée une instance de l'application Flask
app = Flask(__name__)

# Active CORS pour l'origine spécifiée
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})

# Configuration de la base Neon PostgreSQL
# ⚠️ Remplace USER, PASSWORD, HOST, DBNAME par les infos de Neon
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://neondb_owner:npg_GxWK9ie4VSvc@ep-jolly-pine-a98p0tyx-pooler.gwc.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialisation de SQLAlchemy
db = SQLAlchemy(app)

# Définition du modèle "Menu" (équivalent à ton JSON)
class Menu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    plate = db.Column(db.String(255))
    description = db.Column(db.Text)
    image = db.Column(db.String(10))

# Route pour la page d'accueil
@app.route('/')
def index():
    return render_template('index.html')
# http://localhost:5000/

@app.route('/menu')
def menu_page():
    customer = request.args.get('customer', '')
    menu = Menu.query.all()  # 🔥 maintenant on charge depuis Neon
    return render_template('menu.html', menu=menu, customer=customer)

# Route pour obtenir tout le menu
@app.route('/api/menu', methods=['GET'])
#http://localhost:3000/api/menu
def get_menu_json():
    menu = Menu.query.all()
    menu_list = [
        {
            "plate": m.plate,
            "description": m.description,
            "image": m.image
        } for m in menu
    ]
    return jsonify(menu_list)

@app.route('/api/menu/<int:menu_id>', methods=['POST'])
def send_message(menu_id):
    # Récupère le menu concerné
    menu_item = Menu.query.get(menu_id)
    if not menu_item:
        # Si le menu n'existe pas, erreur 404
        return jsonify({'erreur': 'Menu non trouvé'}), 404

    # Récupère les données envoyées par le client (JSON)
    data = request.get_json()
    # Vérifie la présence des champs obligatoires
    customer = data.get('customer')
    email = data.get('email')
    message = data.get('message', '')  # Optionnel

    # Liste des champs manquants
    missing_fields = []
    if not customer:
        missing_fields.append('customer')
    if not email:
        missing_fields.append('email')

    if missing_fields:
        # Si des champs sont manquants, renvoie une erreur
        return jsonify({
            "status": "error",
            "message": f"Champs manquants : {', '.join(missing_fields)}. Veuillez remplir tous les champs obligatoires."
        }), 400

    try:
        # Ici tu pourrais enregistrer la commande dans la base
        # Par exemple, créer une table Commande et y ajouter la commande

        # Pour l'instant, on affiche juste dans la console
        print(f"Commande reçue de {customer} ({email}) pour le menu {menu_item.plate} : {message}")

        # Réponse succès
        return jsonify({
            "status": "success",
            "message": "Votre commande a bien été enregistrée."
        }), 200

    except Exception as e:
        # Gestion des erreurs (ex: erreur BDD)
        db.session.rollback()
        return jsonify({
            "status": "error",
            "message": f"Erreur lors de l'enregistrement : {e}"
        }), 500

# Lance le serveur
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # 🔥 Crée la table si elle n'existe pas
    app.run(port=5000, debug=True)
