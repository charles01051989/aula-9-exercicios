//Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores.
//Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
console.clear;
const prompt = require("prompt-sync")();
const candidates = ["", "Candidato A", "Candidato B", "Candidato C"];
let candA = 0;
let candB = 0;
let candC = 0;
const amountVoter = +prompt("Determine a quantidade de eleitores: ");
console.log();
  for (let i = 0; i < amountVoter; i++) {
    const choiceCand = prompt(
      "Digite [1] para o candidato A - Digite [2] para o candidato B - Digite [3] para o candidato C : "
    );

    if (choiceCand == 1) {
      console.log("Você escolheu o candidato A ");
      candA++;
    } else if (choiceCand == 2) {
      console.log("Você escolheu o candidato B ");
      candB++;
    } else if (choiceCand == 3) {
      console.log("Você escolheu o candidato C ");
      candC++;
    }
  }

console.log(`O candidato A recebeu ${candA} votos`);
console.log(`O candidato B recebeu ${candB} votos`);
console.log(`O candidato C recebeu ${candC} votos`);
