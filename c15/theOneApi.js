//Version simple :
// async function fetchMovieData() {
//   const response = await fetch('https://the-one-api.dev/v2/movie');
//   const data = await response.json();
//   console.log(data);
// }

// fetchMovieData();
const movielist = document.getElementById('movielist');
movielist.style.display = "block";

async function fetchMovieData() {
  const response = await fetch('https://the-one-api.dev/v2/movie', {
    method: "GET",
    headers: {
      'Authorization': "Bearer g8IdQSGMC1mjhPPifbVi"
    }
  });

  const data = await response.json();


  for (let i = 0; i < data.docs.length; i++) {

    let li = document.createElement('li');
    li.innerText = `${data.docs[i].name} à coûté ${data.docs[i].budgetInMillions} million de dollars`;
    movielist.appendChild(li);
  }

  console.log(data);

  const datasuccess = false;

  if (datasuccess === false) {
    return "Sorry, bring another Token";
  }

  console.log(datasuccess);
}


fetchMovieData().then(result => {
  if (result) {
    console.log(result);
  }
});