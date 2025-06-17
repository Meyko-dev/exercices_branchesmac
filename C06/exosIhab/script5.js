const prénom = document.getElementById("prénom")
const button = document.getElementById("Valider")
 console.log(prénom)
button.addEventListener("click", () => {
    console.log(prénom.value)
   document.getElementById("texteAffiché").innerText = "Bonjour, " + prénom.value 
    }
)