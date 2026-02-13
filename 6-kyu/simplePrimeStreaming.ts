/**
 * KATA : Simple prime streaming
 * NIVEAU : 6 Kyu
 * LIEN : https://www.codewars.com/kata/5a908da30025e995880000e3/train/javascript
 * AUTEUR : KenKamau 
 * DESCRIPTION : 
 *  Consider a sequence made up of the consecutive prime numbers. This infinite sequence would start with:
 *  "2357111317192329313741434753596167717379..."
 *  You will be given two numbers: a and b, and your task will be to return b elements starting from index a in this sequence.
 *  For example:
 *  solve(10,5) == `19232` Because these are 5 elements from index 10 in the sequence.
 *  Tests go up to about index 20000.
 *  More examples in test cases. Good luck!
 * 
 */

// --- MY SOLUTION ---
function solve(a: number, b: number): string {
    let fullSequence: string = createNbprime(a + b);

    return fullSequence.slice(a, a + b);
}

function createNbprime(targetLength: number): string {
    let rslt: string = "";
    let i: number = 2;
    
    while (rslt.length < targetLength) {
        if (isPrime(i)) {
            rslt += i.toString();
        }
        i++;
    }
    return rslt;
}

function isPrime(n: number): boolean {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let j = 3; j <= Math.sqrt(n); j += 2) {
        if (n % j === 0) return false;
    }
    return true;
}

// --- TESTS ---
const assert = {
    strictEqual: (actual: string, expected: string) => {
        if (actual === expected) {
            console.log(`Test Passé : Attendu "${expected}", Reçu "${actual}"`);
        } else {
            console.error(`Test Échoué : Attendu "${expected}", mais reçu "${actual}"`);
        }
    }
};

assert.strictEqual(solve(2, 2), '57');
assert.strictEqual(solve(10, 3), '192');
assert.strictEqual(solve(20, 9), '414347535');
assert.strictEqual(solve(30, 12), '616771737983');
assert.strictEqual(solve(40, 8), '83899710');
assert.strictEqual(solve(50, 6), '031071');
assert.strictEqual(solve(10000, 5), '02192');
assert.strictEqual(solve(20000, 5), '09334');
