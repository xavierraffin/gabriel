import { exit } from "process";
import promptSync from "prompt-sync";
const prompt = promptSync();

console.log("***************************************************");
console.log("**    Bienvenue dans le jeu devine nombre        **");
console.log("***************************************************\n");

let nombreMystere = Math.floor(Math.random() * 100) + 1; // X est entre 1 et 100
let nombreReponse;
let coups=0
while(true){
  nombreReponse = prompt("Entre un nombre: ");
  coups=coups+1
  if (nombreReponse == nombreMystere) {
    console.log(`Vous avez gagné en ${coups} coups`);
    break;
  } else {
    if (nombreReponse < nombreMystere) {
      console.log(`Trop petit!`)
    }else{
      console.log(`Trop grand!`);
    }
  }
}


// let name = prompt("Comment s'appelle ton personnage? ");
