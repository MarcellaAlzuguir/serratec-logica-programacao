const prompt = require("prompt-sync")();

console.log("== Banco de Sangue ==");
console.log("[Digite 'Sim' ou 'Nao' nas restrições a seguir:]");

idade = prompt("Idade abaixo de 16 ou acima de 69 anos: ");
peso = prompt("Pesa menos de 50kg: ");
hepatite = prompt("Portador de hepatite: ");
malaria = prompt("Já teve malária: ");
doacao = prompt("Fez doações recentes: ");

resultado = (idade == "Nao") && (peso == "Nao") && (hepatite == "Nao") && (malaria == "Nao") && (doacao == "Nao");

console.log("[Resultado da triagem]");
console.log("Pode doar sangue: " + resultado);