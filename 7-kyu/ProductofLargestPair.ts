/**
 * KATA : Product of Largest Pair
 * NIVEAU : 7 Kyu
 * LIEN : https://www.codewars.com/kata/5784c89be5553370e000061b
 * AUTEUR : 10XL
 * * DESCRIPTION : 
 * Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
 * 
 * All inputs will be valid.
 * Rick is only interested in solutions that are faster than his, which has a running time of O(n log n).
 * [2, 6, 3]                      => 18 = 6 * 3
 * [2, 1, 5, 0, 4, 3]             => 20 = 5 * 4
 * [7, 8, 9]                      => 72 = 8 * 9
 * [33, 231, 454, 11, 9, 99, 57]  => 104874 = 231 * 454
 * 
 */


//L'utilisation ici, de " -Infinity" est important car il n'y pas de de valeur plus petites.
//Au premier tour de comparaison, max1 sera d'office plus grand. Il existe la valeur opposée.
// --- MY SOLUTION ---
function maxProduct(a: number[]){
    let max1: number = -Infinity;
    let max2: number = -Infinity;

  for (let i = 0; i < a.length; i++) {
    const current: number = a[i];

    if (current > max1) {
      max2 = max1;
      max1 = current;
    } else if (current > max2) {
      max2 = current;
    }
  }

  return max1 * max2;
}

// - - - TESTS - - -
const one = [2, 6, 3];
const two = [2, 1, 5, 0, 4, 3];
const three = [7, 8, 9];
const four = [33, 231, 454, 11, 9, 99, 57];
console.log(maxProduct(one));
console.log(maxProduct(two));
console.log(maxProduct(three));
console.log(maxProduct(four));



