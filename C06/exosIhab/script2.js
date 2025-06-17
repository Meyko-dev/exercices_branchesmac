const ajouter = document.getElementById("ajouter")
const enlever = document.getElementById("enlever");
const reset = document.getElementById("reset")

let compteur = 0

ajouter.addEventListener("click", () => {
    compteur = compteur + 1 
    document.querySelector("p").innerText = compteur
})

enlever.addEventListener("click", () => {
    compteur = compteur - 1
    document.querySelector("p").innerText = compteur
})

reset.addEventListener("click", () => {
    compteur = 0
    document.querySelector("p").innerText  = compteur
})
   