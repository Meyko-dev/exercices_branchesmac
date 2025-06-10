// Créer une fonction qui prend en parametre plusieurs articles sous forme de tableau)
function totalPrice(articles){
    let total = 0;
    for (let i = 0; i < articles.length; i++){
        total += articles[i];
    }
    return total;
    }
    console.log(totalPrice([4, 7, 12]))
