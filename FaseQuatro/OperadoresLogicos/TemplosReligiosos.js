
var prompt = require("prompt-sync")();

temperatura = prompt("Digite a temperatura: ");
mascara = prompt("Está de máscara (S ou N): ");

autorizacao = (temperatura < 37.5) && (mascara == 'S');

console.log("Autorizar entrada: " + autorizacao);