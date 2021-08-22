const prompt = require("prompt-sync")();

console.log("== Eleições 2020 ==");
idade = prompt("  Digite sua idade: ");
resposta = idade >= 16;

console.log("  Você já pode votar? " + resposta);