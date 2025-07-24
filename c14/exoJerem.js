// créer la fonction avec "async"
// créer une variable response
// utiliser await et fetch
// passer l'url en parametre de fetch
// créer une variable data en appelant .json() sur response
// ne pas oublier await
// retourner la data
// afficher que les titres 
// afficher que ceux qui ont moins de 2000 / 3000 vues 
// ordonner les data en ordre croissant de nombre de vues

async function fetchData() { 
    const response = await fetch('https://dummyjson.com/posts')
    const data = await response.json()
    console.log(data)
}
fetchData()

async function fetchtitle(){
    const response2 = await fetch('https://dummyjson.com/posts')
    const title = await response2.json()
    console.log(title)

    for (let i = 0; i < data.posts.lenght; i++ ){
        if (data.posts[i].views < 2000) 
            console.log(data.posts[i].title)
            console.log (`le nombre de vues est de ${data.posts[i].views}`)
          
            const array1 = [data.posts.lenght];
            array1.sort(function (a, b) {
            return a - b;
});
console.log(array1);
    }
        

}
fetchtitle()