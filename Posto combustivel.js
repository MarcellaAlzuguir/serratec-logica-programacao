const ler = require("prompt-sync")();



var gasolina = 0;
var alcool = 0;
var gnv = 0;
var diesel = 0;

var cont = 0;

do{
  var codigo = ler("Digite um código (1, 2, 3,4) ou 5 para parar o programa: ");
  switch(codigo){
  case "1": gasolina++;
  break;
  case "2": alcool++;
  break;
  case "3": gnv++;
  break
  case "4": diesel++;
  break;
  default: console.log("Código inválido!");
}
  cont++;
} while (codigo != 5 && cont < 10 );

console.log ("Obrigado!");
console.log ("Gasolina: " + gasolina);
console.log ("Alcool: " + alcool);
console.log ("GNV: " + gnv);
console.log ("Diesel: " + diesel);


