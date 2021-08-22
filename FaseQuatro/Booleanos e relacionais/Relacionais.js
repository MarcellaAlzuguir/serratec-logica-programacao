const prompt = require("prompt-sync")();

a = prompt("Digite um número A: ");
b = prompt("Digite um número B: ");

maior = a > b;
maiorOuIgual = a >= b;
menor = a < b;
menorOuIgual = a <= b;
igual = a == b;
diferente = a != b;

console.log("A é igual a B: " + igual);
console.log("A é diferente de B: " + diferente);
console.log("A é maior que B: " + maior);
console.log("A é maior ou igual a B: " + maiorOuIgual);
console.log("A é menor que B: " + menor);
console.log("A é menor ou igual a B: " + menorOuIgual);