import requests

def get_menu():
    """
    Récupère le menu depuis l'API locale.
    """
    try:
        # Envoie une requête GET à l'API
        response = requests.get("http://localhost:3000/api/menu")
        # S'assure que la requête a réussi
        response.raise_for_status() 
        # Convertit la réponse JSON en un objet Python (liste de dictionnaires)
        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        print(f"Erreur lors de la récupération du menu : {e}")
        return None

# Appelle la fonction et stocke les données
menu_data = get_menu()

if menu_data:
    print("Menu récupéré :")
    # Boucle pour afficher les éléments du menu dans la console
    for item in menu_data:
        # Accède aux données 'plate' et 'image' de chaque élément
        print(f"Plat : {item.get('plate', 'N/A')}, Image : {item.get('image', 'N/A')}")
else:
    print("Impossible de récupérer les données du menu.")