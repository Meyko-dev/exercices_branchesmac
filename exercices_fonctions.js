/*
// Créer une fonction qui prend en parametre plusieurs articles sous forme de tableau)
function totalPrice(articles) {
    let total = 0;
    for (let i = 0; i < articles.length; i++) {
        total += articles[i];
    }
    return total;
}
console.log(totalPrice([10, 4, 8]))


//Créer une fonction correspondant à des articles qui retourne un tableau de prix aléatoire entre 1 et 10
function prixAleatoire(nombreArticles) {
    let articles = [];
    for (let i = 0; i < nombreArticles; i++) {

    }
} 
*/

// 1)Ecris une fonction addition3Numbers() qui affichera la somme de 1 + 2 + 3 dans la console. Objectif : Voir dans la console : “Le résultat de la somme est 6”
// 2) Ecris une nouvelle fonction addition3NumbersWithArg(…) qui affichera aussi le résultat d’une addition de 3 nombres mais cette fois-ci à partir de 3 arguments. Déclarer 3 variables qui prennent chacune une valeur de votre choix. Passez ces variables à la fonction addition3NumbersWithArg(…).
// Objectif : Voir dans la console : “Le résultat de la somme est X”. X étant le résultat de la somme de vos trois valeurs de variables.
function addition3Numbers(){
    const a = 1 ;
    const b = 2 ;
    const c = 3 ;
    return (a + b + c) 
}
console.log(`le resultat de la somme est ${addition3Numbers()}`)
    
function addition3NumbersWithArg(){
    