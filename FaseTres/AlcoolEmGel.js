const prompt = require("prompt-sync")();

capacidade = prompt("Digite a capacidade da garrafa (em ml)?");

qGel = capacidade * (30/100);
qAlcool = capacidade * (70/100);

console.log("Para uma garrafa de " + capacidade + " ml. O volume de álcool deve ser de " + qAlcool + " ml e o volume de gel deve ser de " + qGel + " ml.");