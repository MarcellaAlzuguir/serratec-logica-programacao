//Um posto de combustível quer saber qual de seus combustíveis tem a preferência. Para isso, ele selecionou 10 clientes para responder a pesquisa. Primeiramente, o cliente deve informar o tipo de combustível através dos seguintes códigos: 1.Gasolina, 2. alcool, 3.GNV e 4. diesel 5.fim. Se o cliente informar um código inválido, devemos pedir um novo código até que o mesmo seja válido. O programa encerrará caso ele informe o código 5. Após o encerramento, deve aparecer a mensagem "Obrigado" e também a pesquisa mostrando quantas pessoas votaram em cada combustível.
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


