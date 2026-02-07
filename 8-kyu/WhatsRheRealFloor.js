/**
 * KATA : What's the real floor?
 * NIVEAU : 8 Kyu
 * LIEN : https://www.codewars.com/kata/574b3b1599d8f897470018f6
 * AUTEUR : acadet
 * * DESCRIPTION :
 * Americans are odd people: in their buildings, t
 * he first floor is actually the ground floor and there is no 13th floor (due to superstition).
 * Write a function that given a floor in the american system returns the floor in the european system.
 * With the 1st floor being replaced by the ground floor and the 13th floor being removed, 
 * the numbers move down to take their place. In case of above 13, 
 * they move down by two because there are two omitted numbers below them.
 * Basements (negatives) stay the same as the universal level.
 * 
 */

/**
 * eurropeen -> de 0 à 10 -> 11 étages de 10 à 20 -> 21
 * américan  -> de 0 à 10 -> 10 étages de 10 à 20 -> 19
 * 
 */


// --- MY SOLUTION ---
function getRealFloor(n){
    let floor;
    if(n <= 0){
        return(n);
    }else if(n > 0 && n <= 12){
        floor = n - 1;
    }else{
        floor = n - 2;
    }
    return floor;
}

// --- TESTS LOCAUX ---
console.log(`étage américain 0 = ${getRealFloor(0)}`);
console.log(`étage américain 1 = ${getRealFloor(1)}`);
console.log(`étage américain 10 = ${getRealFloor(10)}`);
console.log(`étage américain 12 = ${getRealFloor(12)}`);
console.log(`étage américain 13 = ${getRealFloor(13)}`);
console.log(`étage américain 14 = ${getRealFloor(14)}`);
console.log(`étage américain 100 = ${getRealFloor(100)}`);
console.log(`étage américain -1 = ${getRealFloor(-1)}`);
console.log(`étage américain -100 = ${getRealFloor(-100)}`);

/**
 * NOTES PERSONNELLES :
 */
