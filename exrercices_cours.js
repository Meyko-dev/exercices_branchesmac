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
]*/
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