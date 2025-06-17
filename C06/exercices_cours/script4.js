const pageTitle = document.querySelector('h1')
console.log(pageTitle)

const subscribeButton = document.querySelector('#newsletter')
let userHasClicked = false

subscribeButton.addEventListener('click',() => {
if(userHasClicked)
{
    userHasClicked = false // valeur par défault car la page vient de chargé est l'utilisateur n'a pas cliqué 
    subscribeButton.innerText = "subscribe"
} else {
    userHasClicked = true // lorsque l'utilisateur à cliqué 
    subscribeButton.innerText = "unsubscribe"
}
});