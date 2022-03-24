// Faça um programa que peça 2 números e crie um array contando
// todos os números os números sequenciais do primeiro até o segundo, independente de ser maior ou menor.
const prompt = require('prompt-sync')();
let insNum1 = +prompt("Insira o 1º número: ");
let insNum2 = +prompt("Insira o 2º número: ");
const listNum = [];
if (insNum1<insNum2){
    listNum.push(insNum1);
    for(let i = insNum1; i < insNum2; i++){
        insNum1++;
        listNum.push(insNum1);
    }
}
if (insNum1>insNum2){
    listNum.push(insNum2);
    for(let i = insNum2; i < insNum1; i++){
        insNum2++;
        listNum.push(insNum2)
    }
}
console.log(listNum);

