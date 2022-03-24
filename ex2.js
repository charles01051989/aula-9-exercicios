// Leia um valor inteiro X. Em seguida mostre os ímpares de 1 até X,
// um valor por linha, inclusive o X, se for o caso. Use o laço FOR.
const prompt = require('prompt-sync')();

const listNum = [];
let insNum = +prompt("Insira um nº inteiro: ")

for(let i = 0; i < insNum; i++){
    i++;
    listNum.push(i)
    console.log(i);
}