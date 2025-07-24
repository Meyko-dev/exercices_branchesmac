const greenButton = document.getElementById("greenButton")
const blueButton = document.getElementById("blueButton")
const redButton = document.getElementById("redButton")

const carre = document.querySelector("#carre")
console.log(greenButton)

redButton.addEventListener("click",() => {
    carre.style.backgroundColor = "red"
})


blueButton.addEventListener("click",() => {
  carre.style.backgroundColor = "blue"
})


greenButton.addEventListener("click",() => {
  carre.style.backgroundColor = "green"
})

console.log(redButton)