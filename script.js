//  if (typeof window !== 'undefined') {
//      console.log('You are on the browser')
//    } else {
//      console.log('You are on the server')
//    }
  

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

// INTERACTION -> Récupérer la lettre choisie              >>>>> faudra t'il en créer une fonction ?
var lettreChoisie;
var buttons = document.querySelectorAll("button");

for (let i = 0; i< buttons.length;i++)
        {
            buttons[i].addEventListener("click", clique())
            lettreChoisie = buttons[i].innerHTML;
        }

// Nombre de vies
var vies = 7;

// mot vide
var motUtilisateur = [];


// verify if a selected letter belongs to the word
function clique ()
{
    console.log (lettreChoisie);
    while (vies>0)  /* || (motUtilisateur !== TableauDesLettresDuMot))  */
    {
       for (let i=0;i<TableauDesLettresDuMot.length;i++)
       {
           // ici pbm avec ma boucle puique qu'elle enlève des vies en cherchant dans le tableau
           if (lettreChoisie==TableauDesLettresDuMot[i])
           {
               alert ('hello');
               // Add motUtilisateur
           }
           else
           {
               // add dessin
               alert ('ciao')
               vies --;
           }
       }
    }




}









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














