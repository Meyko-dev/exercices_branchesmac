const divContainer = document.getElementById("divContainer");


async function fetchOffers() {

    const loadingText = document.getElementById("loadingText");
    loadingText.innerHTML = "Chargement des offres en cours...";

    const response = await fetch("https://www.codepassport.dev/api/offers");
    const offers = await response.json();
    loadingText.style.display = "none";

    offers.forEach(element => {
        //console.log(element)
        let title = document.createElement("h2")
        divContainer.appendChild(title)
        title.innerHTML = element.titre

        let technologie = document.createElement("p")
        divContainer.appendChild(technologie)
        technologie.innerHTML = element.technologie

        let description = document.createElement("p")
        divContainer.appendChild(description)
        description.innerHTML = element.description

    });
}

fetchOffers()