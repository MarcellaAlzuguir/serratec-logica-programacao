/*Vamos criar um pequeno jogo de esconde esconde. Para dois participantes o participante 1 terá 5 lugares para se esconder: 1 - embaixo da cama; 2 - armário; 3 - porão; 4 - atrás da porta; 5 - banheiro. O participante 1 deverá escolher um dos lugares pra se esconder. Em seguida são apresentadas as opções para o participante 2, ele terá duas chances para encontrar onde o participante 1 se escondeu. Caso ele acerte o participante 1 perde. Caso erre ele perde.*/

const prompt = require('prompt-sync')();

do{
console.log ("Pique esconde");
console.log(" Lugares para se esconder: \n1-embaixo da cama, \n2-armário, \n3-porão, \n4-atras da porta, \n5- banheiro.");
console.log("Onde você acha que o jogador está?")
lugar = prompt("Escolha o código desejado: ")

var esconderijo = Math.floor(Math.random() * 5) + 1;

var embaixoCama = "1 - embaixo da cama";
var armario= "2 - armário";
var porao = "3 - porão";
var atrasPorta = "4 - atrás da porta";
var banheiro = "5 - banheiro";
var lugarNome
 switch(esconderijo){
  case 1: (lugarNome= embaixoCama);
  break;
  case 2: (lugarNome = armario); 
  break;
  case 3: (lugarNome = porao); 
  break;
  case 4: (lugarNome = atrasPorta); 
  break;
  case 5: (lugarNome = banheiro);  
  break;
  }
 console.log ("O lugar em que se escondeu foi: " + lugarNome);
 if (lugar == esconderijo){
    console.log ("Você ganhou!");     
}
else {
     console.log ("Você perdeu. Tente novamente!");
}
}while (lugar != esconderijo);
