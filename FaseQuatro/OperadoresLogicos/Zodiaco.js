ler = require("prompt-sync")();

mes = ler("Mês do seu nascimento: ");
dia = ler("Seu dia de nascimento: ");
inteligente = mes == 1;

console.log("Você é inteligente: " + inteligente);