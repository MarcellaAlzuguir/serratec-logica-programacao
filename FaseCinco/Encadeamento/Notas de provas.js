const prompt = require("prompt-sync")();

var nota1 = prompt("Qual foi a sua primeira nota? Digite um valor de 0 a 5:");
var nota2 = prompt("Qual foi a sua segunda nota? Digite um valor de 0 a 5:");

var notaTotal = parseInt(nota1) + parseInt(nota2);

if(notaTotal >= 4){
    if(notaTotal >= 8){
        console.log("Parabéns! Você foi um destaque!");
    }else{
        if(notaTotal >= 6){
        console.log("Você foi aprovado.");
        }else{
            console.log("Voce está de recuperação.");
        }
    }
}else{
    console.log("Infelizmente você foi reprovado");
}