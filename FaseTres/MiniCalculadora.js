var prompt = require("prompt-sync")();

var numero1 = prompt("Digite o primeiro número: ");
var numero2 = prompt("Digite o segundo número: ");

soma = parseInt(numero1) + parseInt(numero2);
console.log("A soma dos números é: " + soma);
subtracao = numero1 - numero2;
console.log("A subtração dos números é: " + subtracao);
multiplicacao = numero1 * numero2;
console.log("A multiplicação dos números é: " + multiplicacao);
divisao = numero1 / numero2;
console.log("A divisão dos números é: " + divisao);