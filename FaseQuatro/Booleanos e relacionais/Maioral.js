const prompt = require("prompt-sync")();

jogador1 = prompt("Digite uma número, jogador 1. ");
jogador2 = prompt("Digite uma número, jogador 2. ");

jogador1Ganha = jogador1 > jogador2;
jogador2Ganha = jogador1 < jogador2;
empate = jogador1 == jogador2;

console.log("RESULTADOS:");
console.log("Vitória do jogador 1: " + jogador1Ganha);
console.log("Vitória do jogador 2: " + jogador2Ganha);
console.log("Empate: " + empate);