
var prompt = require("prompt-sync")();

var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
console.log("Dia hoje: " + dia);
var numBoleto = prompt("Número do Boleto: ");
var diaPagamento = prompt("Dia de pagamento: ");

var desconto = (diaPagamento <= '13') && (diaPagamento >= '10');

console.log("Desconto na próxima mensalidade do boleto número " + numBoleto + "? " + desconto);