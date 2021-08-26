var prompt = require("prompt-sync")();

var visita = prompt("Quantas vezes já nos visitou? ");

if( visita > 1){
    if( visita == 2){
        console.log("Visitas: " + visita);
        console.log("Você já nos visitou " + visita + " vezes");
    }else{
        console.log("Visitas: " + visita);
        console.log("Você já nos visitou " + visita + " vezes");
    }
}else{
    console.log("Visita: " + visita);
    console.log("Você já nos visitou " + visita + " vez");
}