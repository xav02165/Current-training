const cellule = document.querySelectorAll(."case");

const victoire [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]  ];

let Reinitialiser = document.getElementById("Reinitialiser");
let remise a zero = document.getElementById("remise a zero");
let Resultat = document.getElementById("");
let scoreX = 0;
let scoreO = 0;


/* Fonction definit qui gagne celon le tableau */
function Gagnant() {
  for (let i = 0; i < victoire.length; i++) {
    if (
      document.getElementById(victoire[i][0]).innerHTML === symbole &&
      document.getElementById(victoire[i][1]).innerHTML === symbole &&
      document.getElementById(victoire[i][2]).innerHTML === symbole
    ) {

/* Affichage du gagnant selon les symboles  */
      if (symbole === 'X') {
        Resultat.innerHTML = 'Le gagnant est le joueur 1';
        
      } else {
        Resultat.innerHTML = 'Le gagnant est le joueur 2';
        
      }
      /*pour arreter l'affichage des symboles*/

      finJeu = true;
    }
  }
  
}