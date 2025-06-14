const messages = {
    message1 : "Je te rends visite la semaine prochaine",
    message2 : "Super on se voit mardi !" 
};
let fromName = "Marc"
let toName  = "Linda"
function sendMessage(messages, fromName, toName){
    return `De: ${fromName} à: ${toName} Message: ${messages}`;
}//l'accolade était manquante
console.log(sendMessage(messages.message1,fromName, toName))//la parenthèse était manquante;
console.log(sendMessage(messages.message2, toName, fromName,));
//sendMessage["Super on se voit mardi !", "Linda", "Marc"]


let myMessage = "Je t'apprends à coder tes premières fonctions"
let contactName = "Jean"
let myName = "Ada"

function sendMessage(myMessage, myName, contactName){
    return `${myMessage} to ${contactName} from ${myName}`;
} 
console.log(sendMessage(myMessage, myName, contactName));