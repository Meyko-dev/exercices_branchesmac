    // Récupère dans l’objet obj uniquement le nom de la candidate pour l’afficher dans la console Résultat attendu :

    // Le Filip

    // Parcours le tableau d’objets data pour afficher dans la console la liste de tous les noms des candidates. Résultat attendu :

    // Afrodite Amour
    // Edeha Noire
    // Le Filip



const obj = {
  "candidate": "Le Filip",
  "age": 29,
  "city": "Paris",
  "region": "Île-de-France"
}
console.log(obj.candidate); // Affiche "Le Filip"

const data = [
	{
		"candidate": "Afrodite Amour",
		"age": 27,
		"city": "Lyon",
		"region": "Auvergne-Rhône-Alpes"
	},
	{
		"candidate": "Edeha Noire",
		"age": 34,
		"city": "Lyon",
		"region": "Auvergne-Rhône-Alpes"
	},
	{
		"candidate": "Le Filip",
		"age": 29,
		"city": "Paris",
		"region": "Île-de-France"
	}
]
console.log(data[0].candidate, data[1].candidate, data[2].candidate); // Affiche "Afrodite Amour Edeha Noire Le Filip"
