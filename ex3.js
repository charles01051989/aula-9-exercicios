//Faça um programa que, dado uma lista de N números
//(o usuário deve determinar a quantidade de números a serem entrados e entrar cada um deles),
//determine o menor valor, o maior valor e a soma dos valores.
console.clear
const prompt = require('prompt-sync')();

const listN = [];
const amountN = +prompt("Determine a quantidade de números a ser inserida: ")
for (let i = 1; i <= amountN; i++){
    const insNum = +prompt(`Insira o ${i}º número: `);
    listN.push(insNum)
}
var max = Math.max(...listN)
var min = Math.min(...listN)
var sum = listN.reduce(function(sum1,i) {
    return sum1 + i ;
});
//console.log(listN);
console.log(`O maior valor inserido foi ${max}`);
console.log(`O menor valor inserido foi ${min}`);
console.log(`A soma dos valores inseridos foi ${sum}`);