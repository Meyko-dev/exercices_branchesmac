//Exercice 3 : Afficher / Cacher du texte
//Objectif : Utiliser style.display pour modifier la visibilité d'un élément.
//Un paragraphe de texte.
//Un bouton "Afficher / Cacher".
//Quand on clique, le texte apparaît ou disparaît.
console.log(paragraph)


let userHasClicked = false

button.addEventListener("click", () => {
    if(userHasClicked === true){  
        userHasClicked = false
    paragraph.style.display = "none"
    }else{
        userHasClicked = true
        paragraph.style.display = "block"
    }
})
