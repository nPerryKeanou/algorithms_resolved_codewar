/**
 * KATA : Find all possible number combos that sum to a number
 * NIVEAU : 4 kyu
 * LIEN : https://www.codewars.com/kata/555b1890a75b930e63000023/train/javascript
 * AUTEUR :  GaurangTandon
 * DESCRIPTION :
 * Jon and Joe have received equal marks in the school examination. But, they won't reconcile in peace when equated with each other. To prove his might, Jon challenges Joe to write a program to find all possible number combos that sum to a given number. While unsure whether he would be able to accomplish this feat or not, Joe accpets the challenge. Being Joe's friend, your task is to help him out.
 * 
 * Task
 * 
 * Create a function combos, that accepts a single positive integer num (30 > num > 0) and returns an array of arrays of positive integers that sum to num.
 * 
 * Notes
 * 
 * Sub-arrays may or may not have their elements sorted.
 * The order of sub-arrays inside the main array does not matter.
 * For an optimal solution, the following operation should complete within 6000ms.
 * Sample
 * 
 *     combos(3) => [ [ 3 ], [ 1, 1, 1 ], [ 1, 2 ] ]
 *     combos(10) => [ [ 10 ],
 *       [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
 *         [ 1, 1, 1, 1, 1, 1, 1, 1, 2 ],
 *        [ 1, 1, 1, 1, 1, 1, 1, 3 ],
 *         [ 1, 1, 1, 1, 1, 1, 4 ],
 *         [ 1, 1, 1, 1, 1, 5 ],
 *         [ 1, 1, 1, 1, 6 ],
 *         [ 1, 1, 1, 7 ],
 *         [ 1, 1, 8 ],
 *        [ 1, 9 ],
 *         [ 1, 1, 1, 1, 1, 1, 2, 2 ],
 *         [ 1, 1, 1, 1, 1, 2, 3 ],
 *         [ 1, 1, 1, 1, 2, 4 ],
 *         [ 1, 1, 1, 1, 2, 2, 2 ],
 *         [ 1, 1, 1, 1, 3, 3 ],
 *         [ 1, 1, 1, 2, 5 ],
 *         [ 1, 1, 1, 2, 2, 3 ],
 *         [ 1, 1, 1, 3, 4 ],
 *         [ 1, 1, 2, 6 ],
 *         [ 1, 1, 2, 2, 4 ],
 *         [ 1, 1, 2, 2, 2, 2 ],
 *         [ 1, 1, 2, 3, 3 ],
 *         [ 1, 1, 3, 5 ],
 *         [ 1, 1, 4, 4 ],
 *         [ 1, 2, 7 ],
 *         [ 1, 2, 2, 5 ],
 *         [ 1, 2, 2, 2, 3 ],
 *         [ 1, 2, 3, 4 ],
 *         [ 1, 3, 6 ],
 *         [ 1, 3, 3, 3 ],
 *         [ 1, 4, 5 ],
 *         [ 2, 8 ],
 *         [ 2, 2, 6 ],
 *         [ 2, 2, 2, 4 ],
 *         [ 2, 2, 2, 2, 2 ],
 *         [ 2, 2, 3, 3 ],
 *         [ 2, 3, 5 ],
 *         [ 2, 4, 4 ],
 *         [ 3, 7 ],
 *         [ 3, 3, 4 ],
 *         [ 4, 6 ],
 *         [ 5, 5 ] ]
 */

// --- MY SOLUTION ---
function combos(n: number): number[][]{
    const results: number[][] = [];

    /**
     * Fonction d'aide récursive (le "helper")
     * @Param reste, ce qu'il nous rest à combler pour atteindre n
     * @Param min, le plus petit nombre que l'on a le droit d'utiliser (évite les doublons)
     * @Param comboActuel, le chemin  (tableau) que l'on est en train de construire.
     */
    
    function findCombos(rest: number, min: number, actualCombo: number[]): void{
        // CAS DE BASE : si le reste est exactement 0, on a trouvé une combinaison valide
        if(rest === 0){
            //on ajoute une copie du tableau actuel au résualtat (sinon il sera vidé par le pop)
            results.push([...actualCombo]);
            return;
        }

        // On boucle à partir de 'min' pour ne jamais revenir en arrière (évite [1,2] et [2,1])
        for(let i = min; i <= rest; i++){
            //1. Choisir : on ajoute le nombre 'i' à notre combinaison
            actualCombo.push(i);

            //2. Explorer: On relance la focntion avec :
            // - un nouveau reste(l'ancien mois ce qu'on vient de prendre)
            // - le même 'i' comme nouveau minimun (pour le prochain tour)
            findCombos(rest - i, i, actualCombo);

            //3. Désavouiller (backtrack) : On retire le dernier élément ajouté
            //Cela permet de libérer de la place pour essayer le prochain 'i' de la boucle
            actualCombo.pop();
        }
    }

    // On lance la première recherche : on veut atteindre 'n'.
    // On commence au minimun par 1, et avec un tableau vide.
    findCombos(n, 1, [])

    return results;
} 

// --- TEST ---
function testerCombos(n: number, attendu: number) {
  const result = combos(n);
  const reussi = result.length === attendu;

  console.log(`Test pour n = ${n}:`);
  console.log(reussi ? " SUCCÈS" : "  ÉCHEC");
  console.log(`  Nombre de combos trouvés : ${result.length} (Attendu : ${attendu})`);
  
  // Affichage visuel propre
  result.forEach(c => console.log("    ->", JSON.stringify(c)));
  console.log("----------------------------");
}

// Lancement des tests
testerCombos(3, 3);  // [1,1,1], [1,2], [3]
testerCombos(4, 5);  // [1,1,1,1], [1,1,2], [1,3], [2,2], [4]
testerCombos(5, 7);  // Il y a 7 combinaisons pour 5
