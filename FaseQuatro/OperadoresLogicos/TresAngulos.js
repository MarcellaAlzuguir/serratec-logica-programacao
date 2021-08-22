const prompt = require("prompt-sync")();

x = prompt("Digite o valor do primeiro ângulo do triangulo: ");
y = prompt("Digite o valor do segundo ângulo do triangulo: ");
z = prompt("Digite o valor do terceiro ângulo do triangulo: ");


var teste1 = (parseInt(x)+ parseInt(y)+ parseInt(z)) == 180;

console.log("Triangulo existe? " + teste1);