/* Proposição de Requisito: Carlos.*/
/* O Banco de sangue do Hospital H.S.C.,
está precisando repor o seu estoque de sangue, que está abaixo do limite minimo.
É feito uma campanha publicitária local, 
onde foi ofertado um brinde para os doadores que concluirem as suas doações
no período da campanha.
O Hospital necessita repor com urgência os tipos de sangue: A,B e O.
Para doar são necessários alguns requisitos e está em boa condições de saúde.
Os doadores que comparecerem para a campanha de doação,
após a realização da consulta de analise médica,
estarão aptos para doar: sim ou não. */

const prompt = require("prompt-sync")();

console.log("Banco de sangue do Hospital H.S.C");

var tipo = prompt("Qual seu tipo sanguíneo? Responda com \n'a', \n'b', \n'o'");

var necessidade = (tipo == "a") || (tipo == "b") || (tipo == "o");

if (necessidade){
    console.log("Responda SIM ou NAO para as perguntas a seguir");
    var idade = prompt("Idade abaixo de 16 ou acima de 69 anos: ");
    var peso = prompt("Pesa menos que 50kg? Responda 'sim' ou 'nao': ");
    var hepatite = prompt("Portador de Hepatite? Responda 'sim' ou 'nao': ");
    var malaria= prompt("Já teve Malária? Responda 'sim' ou 'nao': ");
    var doacao =  prompt("Fez doação recente?Responda 'sim' ou 'nao': ");
    
    
    var opcoes = ((idade == "nao") && (peso == "nao") && (hepatite == "nao") && (malaria == "nao") && (doacao == "nao"));

    console.log("Resultado:");

        if (opcoes){
            var doador = "Sim";
            console.log("Pode doar sangue? "+ doador);
        }
        else{
            doador = " Não";
            console.log("Pode doar sangue? "+ doador);
            console.log("Infelizmente, você não pode doar sangue");
        }
}
else{
    console.log("Obrigado, mas no momento não predcisamos do seu tipo sanguíneo.");
}