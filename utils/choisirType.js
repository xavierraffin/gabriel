import promptSync from "prompt-sync";
const prompt = promptSync();

export function choisirType(nomType, listeTypes) {
  console.log(`Voici les choix de ${nomType} possibles:`);
  listeTypes.forEach((typePossible, index) => {
    console.log(` ${index} = ${typePossible}`);
  });
  let type = prompt(`Quel est ton choix de ${nomType}? `);
  return listeTypes[type];
}


export function afficheVie(niveauDeVie, sujet) {
    console.log(`niveau de vie ${niveauDeVie} de ${sujet}`);
}