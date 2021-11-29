import { exit } from "process";
import promptSync from "prompt-sync";
import { afficheImage } from "./utils/afficheImage.js";
import { choisirType, afficheVie } from "./utils/choisirType.js";
const prompt = promptSync();

console.log("***************************************************");
console.log("**    Bienvenue dans le jeu de role STARGABS     **");
console.log("***************************************************\n");

let viePersonnage = 15;
let name = prompt("Comment s'appelle ton personnage? ");

const classePerssonage = choisirType(
  "classe de personnage",
  ["magicien", "elfe", "ninja"]
);

const ilVeutUnPouvoir = prompt(`Voudrais-tu un pouvoir? o/n `);
let pouvoirPersonnage;
if (ilVeutUnPouvoir === "o") {
  pouvoirPersonnage = choisirType("pouvoir", ["feu", "glace", "electricité", "vent", "terre"]);
  console.log(
    `Très bien ${name} tu est un ${classePerssonage} avec le pouvoir ${pouvoirPersonnage}\n`
  );
} else {
  console.log(`Très bien ${name} tu est un ${classePerssonage} sans pouvoir\n`);
}

await afficheImage(classePerssonage, "personnages");

afficheVie(viePersonnage, "héros");
prompt(`\nClique pour commencer l'aventure\n`);

const lieu = choisirType("lieu d'aventure", [
  "temple",
  "desert",
  "village",
]);

let enemi;
switch (lieu) {
  case "temple":
    enemi = "fantome";
    break;
  case "desert":
    enemi = "squelette";
    break;
  case "village":
    enemi = "orque";
    break;
}
console.log(
  `Alors que vous entrer dans le ${lieu}, vous vous retrouvez face à un ${enemi}`
);

await afficheImage(enemi, "enemies");

async function combattre(vieEnemi, enemi, action, pouvoir) {
  let forceAttaque = Math.floor(Math.random() * 10);
  if (action === "utiliser pouvoir") {
    action = `utiliser pouvoir de ${pouvoir}`;
    forceAttaque = forceAttaque * 2;
  }
  prompt(`\nVous ${action}, et faites ${forceAttaque} dommages à ${enemi}`);
  vieEnemi = vieEnemi - forceAttaque;
  if (vieEnemi <= 0) {
    console.log(
      `\nVous avez vaincu le ${enemi}, il laisse tomber cette recompense:`
    );

    const index = Math.floor(Math.random() * 2);
    await afficheImage(["katana", "epee"][index], "weapons");
    exit();
  } else {
    afficheVie(vieEnemi, enemi);
    const forceAttaqueEnemi = Math.floor(Math.random() * 8);
    viePersonnage = viePersonnage - forceAttaqueEnemi;
    prompt(
      `\nLe ${enemi} vous attaque et vous fait ${forceAttaqueEnemi} dégats\n`
    );
    if (viePersonnage <= 0) {
      console.log(`Vous etes mort terrassé par le ${enemi}`);
      exit();
    }
    afficheVie(viePersonnage, "héros");
  }
  return vieEnemi;
}

let vieEnemi = 12;

while(true){

    const action = choisirType("action", ["attaquer", "utiliser pouvoir", "fuir"]);


    switch (action) {
        case "attaquer":
            vieEnemi = await combattre(vieEnemi, enemi, action, pouvoirPersonnage);
            break;
        case "utiliser pouvoir":
            vieEnemi = await combattre(vieEnemi, enemi, action, pouvoirPersonnage);
            break;
        case "fuir":
            console.log(
                `Vous avez fuit c'est la fin de cette aventure`
            );
            exit();
    }
}