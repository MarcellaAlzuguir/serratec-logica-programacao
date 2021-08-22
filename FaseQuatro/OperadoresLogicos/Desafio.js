const prompt = require("prompt-sync")();

console.log("Equipe A:")
pacoteA = prompt("Pacotes: ");
var feijaoA = prompt("Feijão: ");

console.log("Equipe B: ");
pacoteB = prompt("Pacotes: ");
var feijaoB = prompt("Feijão: ");

console.log("[Apuração]");
var totalA = (feijaoA * 2) + parseInt(pacoteA);

if((pacoteA % 3) == 0){
    totalA = (feijaoA * 2) + parseInt(pacoteA) + 1;
}
console.log("Equipe A: " + totalA);

var totalB = (feijaoB * 2) + parseInt(pacoteB);

if((pacoteB % 3) == 0){
    totalB = (feijaoA * 2) + parseInt(pacoteA) + 1;
}

console.log("Equipe B: " + totalB);

if(totalA > totalB){
    console.log("E a vencedora é: Equipe A!");
}
else{
    console.log("E a vencedora é: Equipe B!\n");
}