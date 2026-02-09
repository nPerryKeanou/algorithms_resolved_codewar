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

/**
 * chaque ligne de sommes des nb vaut le numéro de ligne en exposant. 
 *              1                 1**1
 *          3       5               3+5 = 8 ----- 2**3
 *      7       9       11          7+9+11 = 27 3**3
 * 13       15      17      19      13+15+17+19 = 54 4**3
 * 
 * 
 * 
 * 1°) visuellement, la premiere ligne contient 1 chiffre et ces esapces.
 *      le chiffe doit se trouver au mileu, au centre de la pirayme et les espaces doivent l'entrourer.
 * 2) c'est la même choses piur les autres.
 * 
 * 3) donc une boucle vaut une ligne.
 * 4) à chaqur ligne on ajout une nb
 * 5) à chaques linge, on retire un espace
 * 6) ce ne sont que des chiffres imparei
 * 
 * 
 * i = boucle main qui fait les ligne
 * j = la valeur des nb
 * nbSpace = le nb d'espace par ligne
 * n = paramd qui est le nb de linge. Donc pour savoir les chiffres à écrire, on dois faire n ** 3.
 * ensuite on démarre de 1 et à chaques i++, on ajout un nb + 2 par ligne
 */




// --- TESTS LOCAUX ---
function rowSumOddNumbers(n: number): void {
  let currentNumber: number = 1;
  
  // 1. On trouve le nombre de caractères du plus grand nombre (le dernier)
  // Pour n=10, le dernier nombre est 99, donc la largeur est 2.
  const lastNumber: number = (n * n) + (n - 1);
  const cellWidth: number = lastNumber.toString().length;

  for (let i: number = 1; i <= n; i++) {
    let row: string[] = [];
    
    for (let j: number = 0; j < i; j++) {
      // 2. On force chaque nombre à faire la même largeur (ex: " 1", "13")
      row.push(currentNumber.toString().padStart(cellWidth, " "));
      currentNumber += 2;
    }
    
    // 3. L'espace de centrage doit aussi tenir compte de la largeur de la cellule
    // On ajoute +1 pour l'espace entre les nombres créé par .join(" ")
    const gap: number = cellWidth + 1;
    const spaces: string = " ".repeat((n - i) * gap / 2);
    
    console.log(spaces + row.join(" "));
  }
}

// - - - TESTS - - -
rowSumOddNumbers(3);
console.log("\n");
rowSumOddNumbers(5);
console.log("\n");
rowSumOddNumbers(10);



/**
 * NOTES PERSONNELLES :
 * 1. Logique Mathématique (Efficacité)
 *  Le défi demande la somme des nombres de la ligne n. Bien que l'on puisse générer chaque nombre, 
 *  la propriété mathématique de ce triangle nous permet de savoir que la somme de la ligne n est égale à n**3
 * 2. Logique de Construction (Boucles)
 *  Pour construire visuellement la pyramide, on utilise deux boucles imbriquées :
 *  Boucle externe (i) : Gère chaque étage de la pyramide (de 1 à n).
 *  Boucle interne (j) : Génère les i nombres impairs de l'étage actuel en incrémentant une variable currentNumber de +2 à chaque étape.
 * 3. Logique d'Affichage (Formatage visuel)
 *  Pour éviter que la pyramide ne se déforme lorsque les nombres passent de 1 à 2 ou 3 chiffres, on applique deux concepts :
 *  La Cellule de Largeur Fixe : On calcule la taille du dernier nombre du triangle (n**2
 *  +n−1). On utilise ensuite .padStart() pour forcer tous les autres nombres à occuper cette même largeur.
 *  Le Centrage Dynamique : À chaque ligne, on ajoute un nombre d'espaces égal à (n - i) * (largeur_cellule / 2). 
 *  Cela décale chaque étage vers la droite pour que la pointe soit parfaitement alignée au centre de la base.
 * 
 */