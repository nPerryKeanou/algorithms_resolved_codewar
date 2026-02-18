/**
 * KATA : First non-repeating character
 * NIVEAU : 5 kyu
 * LIEN : https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
 * AUTEUR :  OverZealous
 * DESCRIPTION : 
 * Write a function that takes a string input, and returns the first character that is not repeated anywhere in the string.
 * For example, if given the input "stress", the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
 * As an added challenge, upper- and lowercase characters are considered the same character, but the function should return the correct case for the initial character. For example, the input "sTreSS" should return "T".
 * If a string contains only repeating characters, return an empty string ("");
 * Note: despite its name in some languages, your function should handle any Unicode codepoint
 * "@#@@*"    --> "#"
 * "かか何"   --> "何"
 * "🐐🦊🐐" --> "🦊"
 * 
 */

// --- MY SOLUTION ---
function firstNonRepeatingLetter(s: string): string {
  // On précise que la Map aura des clés 'string' et des valeurs 'number'
  const compteurs = new Map<string, number>();

  for (const char of s) {
      const charMinuscule = char.toLowerCase();
      // TypeScript comprend maintenant que nbrActuel sera un nombre
      const nbrActuel = compteurs.get(charMinuscule) || 0;

      compteurs.set(charMinuscule, nbrActuel + 1);
  }

  for (const char of s) {
      const charMinuscule = char.toLowerCase();
    
      // On sait que get() renverra un number ou undefined
      if (compteurs.get(charMinuscule) === 1) {
          return char;
      }
  }

  return "";
}

// --- TEST ---
const tests = [
  "stress",
  "sTreSS",
  "GoogLe",
  "aabbcc",
  "🐐🦊🐐",
  "🍎🍐🍎🍐🍒",
  "かか何"
];

tests.forEach(t => {
  console.log(`Entrée: "${t}" -> Sortie: "${firstNonRepeatingLetter(t)}"`);
});