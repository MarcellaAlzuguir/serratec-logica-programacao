const prompt = require("prompt-sync")();

var codigo = prompt("Digite o código do item: ")

switch (codigo) {
    case "001":
        console.log("Cadeira simples - R$ 100,00");        
        break;
    case "002":
        console.log("Cadeira luxo - R$ 200,00");        
        break;
    case "003":
        console.log("Mesa simples - R$ 450,00");        
        break;
    case "004":
        console.log("Mesa luxo - R$ 900,00");        
        break;
    case "005":
        console.log("Cama - R$ 1500,00");        
        break;
}