const prompt = require("prompt-sync")();

var nome = prompt("Paciente: ");
var vacinou = prompt("Já vacinado: ");

var vacinadoSim = "nao";

var verVacinado = vacinou == vacinadoSim;

console.log("[Triagem]")
console.log("Sujeito a infecção: " + verVacinado);