/*On souhaite creer une app qui permet de dire qui a les clefs de l'ecole
L'objectif est de creer une fonction qui retourne 'oui' ou 'non'
On donne en parametre, le prenom
function hasKey(firstname)
On va avoir un tableau avec les noms
des personnes qui ont les clefs :
['Pierre', 'Laure', 'Mathilde', 'Vi']
console.log(hasKey('Jerem')) // affiche 'non'
console.log(hasKey('Laure')) // affiche 'oui' */

/*let keyHolders = ['Pierre', 'Laure', 'Mathilde', 'Vi'];
function hasKey(firstname){
    if  ((firstname) === keyHolders[0] || ((firstname) === keyHolders[1] || (firstname)=== keyHolders[2] || (firstname)=== keyHolders[3])){
        return 'oui'; }
         
        return 'non'; 
        
      }
console.log(hasKey(keyHolders[0]))

L'objectif est de remplacer le tableau par un tableau d' object
[
  {
    firstname: Pierre,
    hasKey: true
  },
  {
    firstname: Jerem,
    hasKey: false
  }
]
//Et la fonction ne prend plus de paramètre mais renvoie la liste (sous forme de tableau) des personnes qui ont les clefs

let keyHolders = [
    { firstname: 'Pierre', hasKey: true },
    { firstname: 'Laure', hasKey: true },
    { firstname: 'Mathilde', hasKey: true },
    { firstname: 'Vi', hasKey: true }
];

let array = []
function whoHasKey() {
    for (let i = 0; i < keyHolders.length; i++) {
        //console.log(`${keyHolders[i].firstname} : ${keyHolders[i].hasKey}`)
        if (keyHolders[i].hasKey === true) {
            //array.push(keyHolders[i].hasKey);
            array.push(keyHolders[i].firstname);

        }
    }
    return array
}
console.log(whoHasKey())

// autre exemple 
const hasKey = (firstname) => {
let name = ["Pierre", "Laure", "Mathilde", "Vi"]

for(let i =0 ; i<name.length; i++){
   if (name[i] === firstname)
    return "oui"
}
return "non" 

// autre manière de faire

const pierre = [ "Pierre", true, "Paris", false];
const samir = [ "Samir", false, "Paris", true];
const users = [ pierre, samir];

console.log(users[0][0], 'habite à', users[0][2])



const pierreArray = [ "Pierre", true, "Paris", false];
const pierre = {
    firstname : "Pierre",
    hasKey: true,
    city: "Paris",
    delegate : false,
    langs: ["js","html"]
}
console.log(Le langage de ${pierre.firstname} est ${pierre.langs[1]'});


    /*autre exercice
function ifWitoutIf(condition, trueValue, falseValue) {
     return  (condition) * (trueValue - falseValue) + falseValue { ;
    }
 }
console.log("Result = ", ifWitoutIf(1, 10, 5)); */

// exercice Restaurant
const restaurant = {
    name: "Macdonald's",
    menus: ["Big Mac", "Royal Deluxe", "Mc Chicken", "Mc Fish"]
}
console.log(`Le restaurant ${restaurant.name} propose ${restaurant.menus.length} le menu : `)
for(let i = 0; i<restaurant.menus.length; i++){
    console.log(`${restaurant.menus[i]}`);
}

//console.log(`Le restaurant ${restaurant.name} propose les menus suivants : ${restaurant.menus}`)
//console.log(`Le restaurant ${restaurant.name}, propose une menu comme ${restaurant.menus[0]} `)
//console.log(`Le restaurant ${restaurant.name}, propose une menu comme ${restaurant.menus[1]} `)
//console.log(`Le restaurant ${restaurant.name}, propose une menu comme ${restaurant.menus[2]} `)
//console.log(`Le restaurant ${restaurant.name}, propose une menu comme ${restaurant.menus[3]} `)


/*exercice coiffeur 
const coiffeur = {
    name: "Texture",
    services: ["coupe", "couleur", "brushing", "lissage","coupe enfant"]
} 
console.log(`Le salon de coiffure ${coiffeur.name} propose ${coiffeur.services.length} services, tels que : ${coiffeur.services}`)
for(let i = 0; i < coiffeur.services.length; i++){
console.log(`${coiffeur.services[i]}`);
}*/

//exercice coiffeur + difficile
const coiffeur = {
    title : 'Texture',
    services : [
            {service: 'coupe', price: 10},
            {service: 'couleur', price: 50},
            {service: 'brushing', price: 20},  
            {service: 'lissage', price: 100},
            {service: 'coupe Enfant', price: 5}
    ]
}
//console.log(coiffeur.services)
console.log(`Le salon de coiffure ${coiffeur.title} propose ${coiffeur.services.length} services, `)
//for(let i = 0; i < coiffeur.services.length; i++){
//console.log(`${coiffeur.services[i]}`);
//}