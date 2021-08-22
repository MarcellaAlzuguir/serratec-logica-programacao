const prompt= require("prompt-sync")();

a = prompt("Digite um número A: ");
b = prompt("Digite um número B: ");

maior = A > B;
maiorOuIgual = A >= B;
menor = A < B;
menorOuIgual = A <= B;
igual = A == B;
diferente = A != B;

console.log("A é igual a B: " + igual);
console.log("A é diferente de B: " + diferente);
console.log("A é maior que B: " + maior);
console.log("A é maior ou igual a B: " + maiorOuIgual);
console.log("A é menor que B: " + menor);
console.log("A é menor ou igual a B: " + menorOuIgual);