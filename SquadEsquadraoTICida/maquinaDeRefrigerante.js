/*Máquina de Refrigerantes.
Uma famosa empresa de refrigerantes precisa de um software para rodar no console das suas novas máquinas pela cidade. O cliente precisa que o console máquina de refrigerante exiba quatro opções de sabores diferentes, ficando a critério do(a) desenvolvedor(a) exibir os preços dos refrigerantes junto com o sabor ou exibir o preço do refrigerante escolhido em uma tela posterior. Caso opte por exibir o valor do produto escolhido em uma tela posterior, será necessário acrescentar uma opção para o usuário voltar para a tela de escolha de sabores após verificar o preço do produto escolhido. Após a tela de escolha, o software deve exibir uma tela para pagamentos apresentando quatro opções de cédulas. Após o cliente escolher a opção de pagamento, o programa deve exibir uma mensagem com o troco. Porém, caso o valor da cédula escolhida seja inferior ao valor do refrigerante, o programa deve exibir uma mensagem de valor inválido e retornar o usuário novamente para a tela de escolha das cédulas até que uma opção de pagamento válida seja escolhida.
Os refrigerantes possuem os seguintes preços:
•    R$ 1,99
•    R$ 3,50
•    R$3,99
•    R$6,00
O cliente deseja opções de pagamentos com as seguintes cédulas:
•    R$ 2,00
•    R$5,00
•    R$10,00
•    R$20,00*/

const prompt = require('prompt-sync')();

var opcao = 0;
var troco = 0;


console.log("Máquina de refrigerantes");
console.log("Temos os seguintes sabores:\n 1 - Maçã verde, \n2 - Cola, \n3 - Guaraná, \n4 - Cereja");


opcao = prompt("Digite o número da sua opção:  ");


while (opcao > 4){
      console.log("C \nDigite a opção correta.\n");
      console.log("Temos os seguintes sabores:\n 1 - Maçã verde, \n2 - Cola, \n3 - Guaraná, \n 4 - Cereja");
      opcao = prompt("Digite o número da sua opção:  ");
}


var preco = 0.00;
var sabor = "";
var pgInt = 0.00;

    if (opcao == 1){
    sabor = "Maçã verde";
    preco = 1.99;
    console.log("O refrigerante escolhido é", sabor,"e custa R$", preco);
    }

    if (opcao == 2){
    sabor = "Cola";
    preco = 3.50;
    console.log("O refrigerante escolhido é", sabor,"e custa R$", preco);
    }

    if (opcao == 3){
    sabor = "Guaraná";
    preco = 3.99;
    console.log("O refrigerante escolhido é", sabor,"e custa R$", preco);
    }

    if (opcao == 4){
    sabor = "Cereja";
    preco = 6.00;
    console.log("O refrigerante escolhido é", sabor,"e custa R$", preco);
        }


console.log("Com que cédula vai efetuar o pagamento: \n R$2 - R$5 - R$10 - R$20");
var pg= prompt("Pague com R$ ");
var pgInt = parseInt(pg);
var control1 = (pgInt == 2.0) || (pgInt == 5.0) || (pgInt == 10.0) || (pgInt == 20.0);

if (control1){
    troco = (pgInt - preco);
    var confereTroco = (Math.sign(troco) == -1);

    while(confereTroco){
        console.log("\n Valor insuficiente.\nInsira mais dinheiro.\n");
        console.log("Você já pagou R$", pg, "Falta pagar R$", Math.abs(troco));
        console.log("Com que cédula vai efetuar o pagamento: \n R$2 - R$5 - R$10 - R$20");
        pg = prompt("Pague com R$ ");
        pgInt= parseInt(pg);
        
        if(control1){
        troco = (pgInt - Math.abs(troco));
        confereTroco = (Math.sign(troco) == -1);
        }
      }
}
else{
console.log("Cédula inválida! \nEscolha uma cédula válida.\nR$2 - R$5 - R$10 - R$20 \n");
pg = prompt("Pague com R$ ");
pgInt = parseInt(pg);
control1 = (pgInt == 2) || (pgInt == 5) || (pgInt == 10) || (pgInt == 20) || (pgInt == 50);
}


console.log("Seu troco é R$", troco,"e seu refrigerante é", sabor,".");
