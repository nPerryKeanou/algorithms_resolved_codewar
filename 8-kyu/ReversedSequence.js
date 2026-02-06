/**
 * KATA : Bin to Decimal
 * NIVEAU : 8 Kyu
 * LIEN : https://www.codewars.com/kata/5a00e05cc374cb34d100000d/solutions/javascript
 * AUTEUR : jamad
 * * DESCRIPTION :
 * jamad
 * 
 */

// --- MY SOLUTION ---
const reverseSeq = n => {
  let result = [];
  
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  
  return result;
};

// --- TESTS LOCAUX ---
console.log(`n === 5 -> ${reverseSeq(5)}`);
console.log(`n === 10 -> ${reverseSeq(10)}`);
console.log(`n === 100-> ${reverseSeq(100)}`);
console.log(`n === 1000-> ${reverseSeq(1000)}`);