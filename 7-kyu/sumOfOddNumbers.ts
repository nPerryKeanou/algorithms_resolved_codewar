/**
 * KATA : Sum of odd numbers
 * NIVEAU : 8 Kyu
 * LIEN : https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
 * AUTEUR : hhelwich
 * * DESCRIPTION :
 * Given the triangle of consecutive odd numbers:
 *              1
 *          3       5
 *      7       9       11
 * 13       15      17      19
 * 
 * Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
 * 
 */


// --- MY SOLUTION ---
function rowSumOddNumbers(n: number): number {
  return Math.pow(n, 3);
}

// - - - TESTS - - -
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(5));
console.log(rowSumOddNumbers(42));



