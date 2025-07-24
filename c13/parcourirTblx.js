// Accède au tableau pour afficher dans la console “Le Filip”
// Accède au tableau pour afficher dans la console “Edeha Noire”
// Parcours le tableau pour afficher dans la console ligne par ligne chaque nom des candidates
// (Bonus) Parcours le tableau candidates pour afficher la liste des candidates dans une page HTML :

const candidates = ['Le Filip','Ruby On The Nail','Leona Winter','Lula Strega','Misty Phoenix',
  'Perseo','Norma Bell','Edeha Noire','Magnetica','Afrodite Amour'];
console.log(candidates[0]) // affiche "Le Filip"
console.log(candidates[7])// affiche "Edeha Noire"

candidates.forEach((candidates) => { console.log(candidates)});// affiche noms des candidates ligne par ligne

