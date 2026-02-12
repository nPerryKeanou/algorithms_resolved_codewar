/**
 * KATA : Arrh, grabscrab!
 * NIVEAU : 6 Kyu
 * LIEN : https://www.codewars.com/kata/52b305bec65ea40fe90007a7
 * AUTEUR : matstc
 * DESCRIPTION : Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.
 * At long last, we need a way to unscramble what these pirates are saying.
 * Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.
 * For example:
 * grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
 * Should return ["sport", "ports"].
 * Return matches in the same order as in the dictionary. Return an empty array if there are no matches.
 * Good luck!
 *  
 * 
 */

// --- MY SOLUTION ---
function grabscrab(anagram: string, dictionary: string[]): string[] {
    let newDico: string[] = [];
    
    let anagramSorted = anagram.split('').sort().join('');

    for(let i: number = 0; i < dictionary.length; i++){
        let wordSorted = dictionary[i].split('').sort().join('');
        if(anagramSorted === wordSorted){
            newDico.push(dictionary[i]);
        }
    }
    
    return newDico;
}

// --- ALTERNATIVE SOLUTION ---


// --- TEST LOCAL ---
console.log(`"hi" --- ["al","yhqjyoi"] : ${grabscrab("hi", ["al","yhqjyoi"])}`);
console.log(`"trisf" ---  ["first"] : ${grabscrab("trisf", ["first"])}`);
console.log(`"oob" --- ["bob", "baobab" : ${grabscrab("oob", ["bob", "baobab"])}`);
console.log(`"ainstuomn" --- ["mountains", "hills", "mesa"] : ${grabscrab("ainstuomn", ["mountains", "hills", "mesa"])}`);
console.log(`"oolp" --- ["donkey", "pool", "horse", "loop"] : ${grabscrab("oolp", ["donkey", "pool", "horse", "loop"])}`);
console.log(`"ortsp", --- ["sport", "parrot", "ports", "matey"] : ${grabscrab("ortsp", ["sport", "parrot", "ports", "matey"])}`);
console.log(`"ourf", --- ["one","two","three"] : ${grabscrab("ourf", ["one","two","three"])}`);