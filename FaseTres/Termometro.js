const prompt = require("prompt-sync")();

Celsius = prompt("Digite a temperatura em °C: ");
Fahrenheit = (Celsius * 9/5 + 32);

console.log("A temperatura em Fahrenheit é: " + Fahrenheit + ".");