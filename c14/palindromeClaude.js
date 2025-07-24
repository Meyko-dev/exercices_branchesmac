
//     function maxDaysInMonth() {
//     const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     return daysInMonth;
// }

// function isValidDate(dateString) {
//     // Expression régulière pour le format dd/mm/aaaa
//     const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
//     const match = dateString.match(dateRegex);
    
//     if (!match) {
//         return false;
//     }
    
//     const day = parseInt(match[1], 10);
//     const month = parseInt(match[2], 10);
//     const year = parseInt(match[3], 10);
    
//     // Vérifier les contraintes d'années
//     if (year < 1000 || year > 9999) {
//         return false;
//     }
    
//     // Vérifier le mois (1-12)
//     if (month < 1 || month > 12) {
//         return false;
//     }
    
//     // Vérifier le jour selon le mois
//     const daysInMonth = maxDaysInMonth();
//     const maxDays = daysInMonth[month - 1];
    
//     if (day < 1 || day > maxDays) {
//         return false;
//     }
    
//     return true;
// }

// function isPalindrome(dateString) {
//     if (!isValidDate(dateString)) {
//         return false;
//     }
    
//     // Enlever les "/" pour avoir une chaîne de chiffres
//     const digitsOnly = dateString.replace(/\//g, '');
    
//     // Vérifier si c'est un palindrome
//     const reversed = digitsOnly.split('').reverse().join('');
    
//     return digitsOnly === reversed;
// }

// function getPalindrome() {
//     const palindromeDates = [];
    
//     // Parcourir toutes les années de 1000 à 9999
//     for (let year = 1000; year <= 9999; year++) {
//         // Parcourir tous les mois
//         for (let month = 1; month <= 12; month++) {
//             const daysInMonth = maxDaysInMonth();
//             const maxDays = daysInMonth[month - 1];
            
//             // Parcourir tous les jours du mois
//             for (let day = 1; day <= maxDays; day++) {
//                 const dayStr = day.toString().padStart(2, '0');
//                 const monthStr = month.toString().padStart(2, '0');
//                 const dateString = `${dayStr}/${monthStr}/${year}`;
                
//                 if (isPalindrome(dateString)) {
//                     palindromeDates.push(dateString);
//                 }
//             }
//         }
//     }
    
//     return palindromeDates;
// }

// // Tests
// console.log("Test isPalindrome:");
// console.log(isPalindrome("11/02/2011")); // true
// console.log(isPalindrome("12/02/2021")); // true
// console.log(isPalindrome("15/03/2020")); // false

// console.log("\nDates palindromes trouvées:");
// const palindromes = getPalindrome();
// palindromes.forEach(date => console.log(date));
