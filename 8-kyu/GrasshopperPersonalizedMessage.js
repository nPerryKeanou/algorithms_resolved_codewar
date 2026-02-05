/**
 * KATA : Grasshopper - Personalized Message
 * NIVEAU : 8 Kyu
 * LIEN : https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
 * AUTEUR : danleavitt0
 * * DESCRIPTION :
 * Create a function that gives a personalized greeting.
 * This function takes two parameters: name and owner.
 * 
 * Use conditionals to return the proper message:
 * case name equals owner return 'Hello boss' 
 * case otherwise return 'Hello guest' 
 * 
 */

// --- MY SOLUTION ---
function greet (name, owner) {
  if(name === owner){
    return ("Hello boss");
  }else{
    return ("Hello guest");
  }
}



// --- SOLUTIONS ALTERNATIVES ---
// Utilisation de l'opérateur ternaire
// const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';
//
// function greet (name, owner) {
//   return `Hello ${name===owner?'boss':'guest'}`
// }


// --- TESTS LOCAUX ---
console.log("Test Boss  :", greet("john", "john") === "Hello boss" ? "✅ SUCCESS" : "❌ FAIL");
console.log("Test Guest :", greet("john", "jojo") === "Hello guest" ? "✅ SUCCESS" : "❌ FAIL");

/**
 * NOTES PERSONNELLES :
 * Utilisation de l'opérateur d'égalité stricte (===) pour comparer les deux chaînes.
 * L'ordre des arguments est crucial ici : le premier est le visiteur, le second est le propriétaire.
 */