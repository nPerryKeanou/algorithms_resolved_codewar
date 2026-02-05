/**
 * KATA : Bin to Decimal
 * NIVEAU : 8 Kyu
 * LIEN : https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/javascript
 * AUTEUR : Wichu
 * * DESCRIPTION :
 * Write a function that converts a binary number (passed as a string) to a decimal number.
 * 
 */

// --- MY SOLUTION ---
function binToDec(bin) {
  let result = 0;
  let powr = 0;

  // On parcourt la chaîne de la droite vers la gauche
  for (let i = bin.length - 1; i >= 0; i--) {
    // Si le caractère est '1', on ajoute 2 puissance la position actuelle
    if (bin[i] === '1') {
      result += Math.pow(2, powr);
    }
    powr++;
  }
  return result;
}

// --- SOLUTION ALTERNATIVE ---
/* En JavaScript, on peut aussi utiliser parseInt avec la base 2 :
    function binToDec(bin){
        return parseInt(bin,2);
    }
*/

// --- TESTS LOCAUX ---
console.log("Test '1' :", binToDec("1") === 1 ? "TRUE" : "FALSE");
console.log("Test '10' :", binToDec("10") === 2 ? "TRUE" : "FALSE");
console.log("Test '101101' :", binToDec("101101") === 45 ? "TRUE" : "FALSE");
console.log("Test '1001001' :", binToDec("1001001") === 73 ? "TRUE" : "FALSE");

/**
 * NOTES PERSONNELLES :
 * Le binaire est une base 2. Chaque position 'n' (en partant de 0 à droite) 
 * représente 2^n. J'ai choisi de parcourir la chaîne à l'envers pour 
 * faire correspondre l'index de la boucle avec la puissance de 2.
 */