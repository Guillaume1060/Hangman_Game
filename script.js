 if (typeof window !== 'undefined') {
     console.log('You are on the browser')
   } else {
     console.log('You are on the server')
   }
  

// Tableau du mots
var motsCachés = ["poubelle", "valeur", "maison", "sac", "dentiste", "organisation", "vélo", "ordinateur", "arbre", "zoo", "zombie", "pic", "extraordinaire", "anticonstitutionellement"];


// Mot à chercher 
var motcaché = motsCachés [Math.floor(Math.random() * (motsCachés.length))];
console.log (motcaché);

// récupérer chaque lettre du mot
TableauDesLettresDuMot = motcaché.split('');
console.log (TableauDesLettresDuMot)

// alphabet
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log (alphabet);

// INTERACTION -> Lettre choisie
var lettreChoisie;
let btn = document.getElementById("clavier");
console.log (btn);
btn.addEventListener ('click', () => { console.log(btn) });

console.log (lettreChoisie);




// Nombre de vies
var vies = 7;

// mot vide
var motUtilisateur = [];

// verify if a selected letter belongs to the word
// while (vies>0 || (motUtilisateur !== TableauDesLettresDuMot))
// {
//     for (i=0;i<TableauDesLettresDuMot.length;i++)
//     {
//         // ici pbm avec ma boucle puique qu'elle enlève des vies en cherchant dans le tableau
//         if (lettreChoisie==TableauDesLettresDuMot[i])
//         {
//             // Add motUtilisateur
//         }
//         else
//         {
//             // add dessin
//             vies --;
//         }
//     }
// }



// Win or Lose
// if (vies==0)
// {
//     alert ("Game Over");
// }
// else
// {
//     alert ("congrats");
// }














