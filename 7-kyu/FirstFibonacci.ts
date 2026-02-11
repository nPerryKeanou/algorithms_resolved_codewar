/**
 * KATA : First Fibonacci
 * NIVEAU : 7 Kyu
 * LIEN : https://www.codewars.com/kata/6965d769930fb2eff921668f
 * AUTEUR : NicholasU-01
 * DESCRIPTION : 
 * What is the Fibonacci sequence
 * The Fibonacci sequence starts with the numbers 0 and 1, and every next number is given by adding the previous two together. So 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, etc.
 * The challenge
 * Your challenge is, given two numbers in a Fibonacci-like sequence (where the next number is found by adding the two previous numbers), to find the lowest possible non-negative numbers that the sequence originates from. For example, if you are given the numbers 398 and 644, which come from this sequence:
 * 2, 6, 8, 14, 22, 36, 58, 94, 152, 246, 398, 644
 * Then you would return 2 and 6, as they are the numbers which started the sequence.
 * Note that 8 and 14, while they also start a sequence containing 398 and 644, are not correct as they are not the lowest possible sequence start.
 * Note
 * For the purposes of this puzzle, Fibonacci-like sequences don't decrease. This means that the following sequence is not considered Fibonacci-like, and 4 and 2 are NOT solutions to the puzzle:
 * 4, 2, 6, 8, 14, 22, 36, 58, 94, 152, 246, 398, 644
 * Good luck!
 * 
 */

// --- MY SOLUTION ---
function firstFibonacci(a: number, b: number): number[] {
    let c: number = 0;

    if(a <= 0 || b <= 0 || a > b){
        return([a,b]);
    }
    while(true){
        c = b - a;
        if(c >= 0 && c <= a){
            b = a;
            a = c;
        }else{
            break;
        }
    }
    return [a,b];
}

// --- ALTERNATIVE SOLUTION ---
/**
* const firstFibonacci = (a: number, b: number): number[] => (b - a < 0 || b - a > a) ? [a, b] : firstFibonacci(b - a, a);
 */

// --- TEST LOCAL ---
const tests = [
    { a: 398, b: 644, expected: [2, 6] },
    { a: 5, b: 8, expected: [0, 1] },
    { a: 2, b: 10, expected: [2, 10] },
    { a: 100, b: 101, expected: [1, 99] }, // 1, 99, 100, 101 (101-100=1, 1<=100 ok. 100-1=99, 99>1 stop)
    { a: 0, b: 1, expected: [0, 1] },
    { a: 1, b: 1, expected: [0, 1] }
];

tests.forEach(({a, b, expected}) => {
    const result = firstFibonacci(a, b);
    const success = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`Test (${a}, ${b}): ${success ? "✅ PASSED" : "❌ FAILED"} (Got: [${result}], Expected: [${expected}])`);
});