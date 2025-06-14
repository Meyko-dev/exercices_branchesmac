//Écris une fonction qui prend en argument un nombre entier et retourne son carré. Affiche le résultat dans la console. Objectif : Je donne 3 à ma fonction, j’obtiens 9. Je donne 2 à ma fonction, j’obtiens 4.
//Stocke le résultat de la fonction dans une variable (c’est-à-dire, créé une variable qui sera égale à l’appel de la fonction). Nous allons utiliser cette variable pour la donner à une autre fonction . Ecris une autre fonction qui va multiplier par 10, la variable précédente. Affiche le résultat dans la console. Objectif : Je donne 9 à ma fonction de multiplication, j’obtiens 90.
//Modifie le code existant et demande à l’utilisateur via une fonction existante (que tu dois rechercher), le nombre qui sera en entrée de la première fonction. Objectif : L’utilisateur rentre un nombre, disons 4. Dans la console, je dois voir successivement 16 et 160.


/*let number = 6
function numbersquare(number){
    return (number ** 2);
//donne le carré du paramètre "number"
}
console.log(numbersquare(number))

let result = numbersquare(number)
function multiplicationBy10(result){
    return (result * 10);
}
console.log(multiplicationBy10(result))

// // // // // // // // // // // // // //

let number = prompt("Entrez un nombre entier");
// Dde à l'utilisateur de saisir un nombre entier de son choix
number = Nombre(number);//Codepen ne prend pas en charge cette ligne
// Convertit la saisie de l'utilisateur en nombre entier
function numbersquare(number){
    return (number ** 2);
//donne le carré du paramètre "number"
}
console.log(numbersquare(number))

let result = numbersquare(number)
function multiplicationBy10(result){
    return (result * 10);
}
console.log(multiplicationBy10(result))
*/

let fromName = "Marc";
let toName = "Linda";
let message = "Je te rends visite la semaine prochaine";
function sendMessage(message, fromName, toName){
    
} console.log("From : " + fromName + " to : " + toName + " Message : " + message);

sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");
sendMessage("Super on se voit mardi !", "Linda", "Marc");

