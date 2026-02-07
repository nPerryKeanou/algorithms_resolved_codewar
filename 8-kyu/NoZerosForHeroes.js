/**
 * KATA : What's the real floor?
 * NIVEAU : 8 Kyu
 * LIEN : https://www.codewars.com/kata/570a6a46455d08ff8d001002
 * AUTEUR : thecodix
 * * DESCRIPTION :
 * Numbers ending with zeros are boring.
 * They might be fun in your world, but not here.
 * Get rid of them. Only the ending ones.
 * 
 */

// --- MY SOLUTION ---
function noBoringZeros(n) {
    let nbZero;
    let nbString = n.toString();
    let j = 0;

    for(let i = nbString.length - 1; nbString[i] === "0"; i--){
        j += 1;
    }
    nbZero = 10 ** j;
    return(n / nbZero);
}

// --- SOLUTIONS ALTERNATIVES ---
// function noBoringZeros(n) {
//   while (n % 10 === 0 && n !== 0) {
//     n = n / 10
//   }
//   return n
// }

// --- TESTS LOCAUX ---
console.log(`10 -> ${noBoringZeros(10)}`);
console.log(`1450 -> ${noBoringZeros(1450)}`);
console.log(`16000 -> ${noBoringZeros(16000)}`);
console.log(`10600 -> ${noBoringZeros(10600)}`);
console.log(`-10 -> ${noBoringZeros(-10)}`);
console.log(`1 -> ${noBoringZeros(1)}`);
console.log(`1001 -> ${noBoringZeros(1001)}`);
console.log(`-10001 -> ${noBoringZeros(-10001)}`);