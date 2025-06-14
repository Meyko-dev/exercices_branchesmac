// 1)Ecris une fonction addition3Numbers() qui affichera la somme de 1 + 2 + 3 dans la console. Objectif : Voir dans la console : “Le résultat de la somme est 6”
// 2) Ecris une nouvelle fonction addition3NumbersWithArg(…) qui affichera aussi le résultat d’une addition de 3 nombres mais cette fois-ci à partir de 3 arguments. Déclarer 3 variables qui prennent chacune une valeur de votre choix. Passez ces variables à la fonction addition3NumbersWithArg(…).
// Objectif : Voir dans la console : “Le résultat de la somme est X”. X étant le résultat de la somme de vos trois valeurs de variables.
// 3)Appelez addition3NumbersWithArg() 3 fois avec des valeurs d’argument différentes. Objectif : Voir dans la console : “Le résultat de la somme est X ” “Le résultat de la somme est Y” “Le résultat de la somme est Z”


/*function addition3Numbers(){
    const a = 1 ;
    const b = 2 ;
    const c = 3 ;
    return (a + b + c) 
}
console.log(`le resultat de la somme est ${addition3Numbers()}`)
    

function addition3NumbersWithArg(x, y, z){
let sum = x + y + z ;
console.log("le resultat de la somme est", sum)
}
addition3NumbersWithArg(10, 15, 20);
addition3NumbersWithArg(20, 30, 40);
addition3NumbersWithArg(1, 2, 3);*/

sendMessage(message, fromName, toName)
    console.log("From : " + fromName + " to : " + toName + " Message : " + message);

sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");
sendMessage("Super on se voit mardi !", "Linda", "Marc");

let contactName = "Jean";
let myName = "Ada";
let myMessage = "Je t'apprends à coder tes premières fonctions";
sendMessage(myMessage, myName, contactName);