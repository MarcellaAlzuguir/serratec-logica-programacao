/* Algoritmos - 14 - Como o restaurante não faz “Reembolso” de valores inteiros entre 20 e 100 Reais, a recepcionista irá digitar o valor e o sistema preencherá um cupom desconto. */

const prompt = require("prompt-sync")();

var valor = prompt ("Reembolso: R$ ");
var valorInt = Number.isInteger(valor);

if (valorInt){
    switch(valor){
        case 21:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Vinte e Um Reais");
            break;
        case 22:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Vinte e Dois Reais");
            break;
        case 23:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Vinte e Três Reais");
            break;
        case 24:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Vinte e Quatro Reais");
            break;
        case 25:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Vinte e Cinco Reais");
            break;
        case 26:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Vinte e Seis Reais");
            break;
        case 27:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Vinte e Sete Reais");
            break;
        case 28:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Vinte e Oito Reais");
            break;
        case 29:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Vinte e Nove Reais");
            break;
        case 30:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Trinta Reais");
            break;
        case 31:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Trinta e Um Reais");
            break;
        case 32:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Trinta e Dois Reais");
            break;
        case 33:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Trinta e Três Reais");
            break;
        case 34:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Trinta e Quatro Reais");
            break;
        case 35:
            console.log(":: Restaurante Braya ::");
            console.log("Cupom de desconto para sua próxima visita: ");
            console.log("** Trinta e Cinco Reais");
            break;

}
}else{
    console.log(":: Restaurante Braya ::");
    console.log("Troco de R$ " + valor);
}