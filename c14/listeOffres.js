const loading = document.getElementById("loading");
const div = document.getElementById("container");


async function fetchOffers() {
    const response = await fetch("https://www.codepassport.dev/api/offers");
    const offers = await response.json();
  

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