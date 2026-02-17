/**
 * KATA : String incrementer
 * NIVEAU : 5 kyu
 * LIEN : https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
 * AUTEUR :  parceval
 * DESCRIPTION : 
 * Your job is to write a function which increments a string, to create a new string.
 * If the string already ends with a number, the number should be incremented by 1.
 * If the string does not end with a number. the number 1 should be appended to the new string.
 * Examples:
 * foo -> foo1
 * foobar23 -> foobar24
 * foo0042 -> foo0043
 * foo9 -> foo10
 * foo099 -> foo100
 * Attention: If the number has leading zeros the amount of digits should be considered.
 * 
 */

// --- MY SOLUTION ---
function incrementString (strng: string): string{
    let i: number = strng.length - 1;

    while(i >= 0 && /^[0-9]$/.test(strng[i])){
        i--;
    }

    const text: string = strng.slice(0, i + 1);
    const rest: string = strng.slice(i + 1);
    
    let incremented: string = (Number(rest) + 1).toString();

    while (incremented.length < rest.length) {
        incremented = "0" + incremented;
    }

    // 3. Retourner le résultat final
    return text + incremented;

}

// --- TEST ---
console.log(`test 1 --> "okmec123" --> ${incrementString("okmec123")}`);
console.log(`test 1 --> "okmec" --> ${incrementString("okmec")}`);
console.log(`test 1 --> "okmec0123" --> ${incrementString("okmec0123")}`);
console.log(`test 1 --> "okmec99" --> ${incrementString("okmec99")}`);
console.log(`test 1 --> "okmec009" --> ${incrementString("okmec009")}`);