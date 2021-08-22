const prompt = require('prompt-sync')();
var resposta = 0
var combustivel = '';


do {


console.log('Olá, caro(a) cliente, gostariamos de saber qual dos nossos combustíveis é o seu preferido!');
resposta = prompt('Por favor, responda com o número correspondente: \n 1- Gasolina\n 2- Álcool \n 3- GNV \n 4- Diesel \n 5- Sair\n ->');

var respostaValida = (resposta >=1) && (resposta <=5);

}
while (!respostaValida);


switch (resposta) {
    case "1":
        combustivel = "Gasolina"; 
        break;
        case "2":
            combustivel = "Álcool"; 
            break;
            case "3":
            combustivel = "GNV"; 
            break;
            case "4":
            combustivel = "Diesel"; 
            break;
            case "5":
                console.log('Optou por não responder.');
                sair();
                break;
    default:

        break;
  }

if (resposta !=5)
{
console.log('Você selecionou o combustível: '+ combustivel)
sair();
};

function sair() {
    console.log('Obrigado pela preferência!');
}