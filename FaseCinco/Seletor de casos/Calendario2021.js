var ler = require("prompt-sync")();

var mes = ler("Mês: ");
var dia = parseInt(ler("Dia: "));

switch (dia){
case 1:
case 8:
case 15:
case 22:
case 29:
console.log("O dia " + dia + " de agosto é Domingo.");
break;
    
case 2:
case 9:
case 16:
case 23:
case 30:
console.log("O dia " + dia + " de agosto é Segunda-feira.");
break;
    
case 3:
case 10:
case 17:
case 24:
case 31:
console.log("O dia " + dia + " de agosto é Terça-feira.");
break;
    
case 4:
case 11:
case 18:
case 25:
console.log("O dia " + dia + " de agosto é Quarta-feira.");
break;

case 5:
case 12:
case 19:
case 26:
console.log("O dia " + dia + " de agosto é Quinta-feira.");
break;

case 6:
case 13:
case 20:
case 27:
console.log("O dia " + dia + " de agosto é Sexta-feira.");
break;

case 7:
case 14:
case 21:
case 28:
console.log("O dia " + dia + " de agosto é Sábado.");
break;

}