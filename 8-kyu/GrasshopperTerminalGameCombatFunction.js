/**
 * KATA : Bin to Decimal
 * NIVEAU : 8 Kyu
 * LIEN : https://www.codewars.com/kata/586c1cf4b98de0399300001d/solutions/javascript
 * AUTEUR : rom4eg
 * * DESCRIPTION :
 * Create a combat function that takes the player's current health and the amount of damage received, 
 * and returns the player's new health. Health can't be less than 0.
 * 
 */


// --- MY SOLUTION ---
function combat(health, damage) {
    let newHealth = health - Math.max(0, damage);

    return newHealth < 0 ? 0 : newHealth;
}

// --- TESTS LOCAUX ---
// console.log(`healt = 10, damage = 5 -> healt === ${combat(10,5)}`);
// console.log(`healt = 10, damage = 0 -> healt === ${combat(10,0)}`);
// console.log(`healt = 10, damage = -5 -> healt === ${combat(10,-5)}`);
// console.log(`healt = 0, damage = 5 -> healt === ${combat(0,5)}`);
// console.log(`healt = -10, damage = 5 -> healt === ${combat(-10,5)}`);
// console.log(`healt = -10, damage = -5 -> healt === ${combat(-10,-5)}`);

/**
 * NOTES PERSONNELLES :
 *  On utilise Math.max(0, damage) pour que des dégâts de -5 deviennent 0
 *  On s'assure que le résultat final n'est pas sous 0
 */