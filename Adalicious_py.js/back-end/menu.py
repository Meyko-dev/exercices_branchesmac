from flask import Flask, render_template
import json

app = Flask(__name__)

# Charge le fichier JSON et le transforme en données Python
def load_menu_data():
    try:
        with open("menu.json", "r", encoding="utf-8") as file:
            return json.load(file)
    except FileNotFoundError:
        return []

# Route principale qui lie le JSON au HTML
@app.route('/api/menu')
def show_menu():
    menu_data = load_menu_data()
    # Passe menu_data au template sous le nom 'menu'
    return render_template('menu.html', menu=menu_data)

if __name__ == '__main__':
    app.run(port=3000, debug=True)
