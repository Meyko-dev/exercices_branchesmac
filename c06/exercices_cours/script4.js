//exemple 1 changement du titre de la page: 
const pageTitle = document.querySelector('h1');
if (pageTitle) {
    pageTitle.innerText = "Nouvelles recettes !";
}

const subscribeButton = document.querySelector('#newsletter');
let userHasClicked = false;
subscribeButton.addEventListener('click', () => {
    if (userHasClicked) {
        userHasClicked = false;
        subscribeButton.innerText = "Subscribe";
    } else {
        userHasClicked = true;
        subscribeButton.innerText = "Unsubscribe";
    }
});