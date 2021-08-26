/*A prefeitura da cidade quer fazer uma pesquisa e saber quantos de seus habitantes já foram vacinados contra o corona vírus. 
Essa pesquisa irá responder:
 - Quantas pessoas tomaram a primeira dose.
     Avisar: "Não esqueça a próxima dose"
 - Quantas tomaram a segunda dose.
     Avisar: "Parabéns, você está imunizado! Continue se cuidando!"
 - Quantas ainda não tomaram nenhuma dose.
     Avisar: "Você deve tomar a vacina, proteja você e as pessoas que ama."
 Além disso também dirá quantas tomaram a dose de cada laboratório (quantidade de laboratórios que o programador preferir). 

Ao final o programa deve gerar saídas mostrando:
 - A quantidade de pessoas entrevistadas no dia.
 - Quantas tomaram uma dose, duas doses ou nenhuma dose.
 - Quantas doses de cada laboratório foram aplicadas. 

 O programa só deve parar quando não houver mais nenhuma pessoa para ser entrevistada.*/

var prompt = require("prompt-sync")();

var qtdDose;
var qtdEntrevistas = 0;
var laboratorio = 0;

var doseZero = 0;
var doseUm = 0;
var doseDois = 0;

var butantan = 0;
var oxford = 0;
var pfizer = 0;
var janssen = 0;


var entrevistado = prompt ("Vamos começar a entrevista? Digite 'S' para sim ou 'N' para não: ");

while(entrevistado == 'S' || entrevistado == 's'){
    qtdDose = prompt("\nQuantas doses de vacina você já tomou? Digite : \n0 - nenhuma dose, \n1- uma dose, \n2 - duas doses ");
   

    if(qtdDose == 0){
        console.log("\nConsulte nosso calendaário de vacinação para saber se já pode tomar. A vacina salva vidas!");
        doseZero++;
    }
    else{
        laboratorio = prompt("\nDe qual laboratório é a vacina que você tomou?Digite:  \n1 - Butantan,  \n2 - Oxford, \n3 - Pfizer, \n4 - Janssen ");
        laboratorioInt = parseInt(laboratorio);

        if(laboratorioInt == 1){
            butantan++;
        }
        if(laboratorioInt == 2){
            oxford++;
        }
        if(laboratorioInt == 3){
            pfizer++;
        }
        if(laboratorioInt == 4){
            janssen++;
        }
        
        if(qtdDose == 1){
            console.log("\nNão esqueça da segunda dose");
            doseUm++;
        }
        else{
            console.log("\nParabéns, você está imunizado! Continue usando máscara");
            doseDois++;
        }
    }


    entrevistado = prompt ("\nMais alguém será entrevistado? (Digite 'S' para sim ou 'N' para não)");
    qtdEntrevistas ++;
}

console.log("\nO número de entrevistado(s) hoje foi de " + qtdEntrevistas + " entrevistas. \n");
console.log(doseZero + " entrevistados ainda não tomaram nenhuma dose");
console.log(doseUm + " entrevistados tomaram a primeira dose e estão aguardando a segunda.");
console.log(doseDois + " entrevistados já tomaram a segunda dose e estão imunizados.");
console.log("\nDos entrevistados, " + butantan + " entrevistados receberam a dose da vacina do Butantan (Coronavac).");
console.log("Dos entrevistados, " + oxford + " entrevistados receberam a dose da Oxford (Astrazeneca).");
console.log("Dos entrevistados, " + pfizer + " entrevistados receberam a dose da Pifzer (Pfizer).");
console.log("Dos entrevistados, " + janssen + " entrevistados receberam a dose da Janssen (Johnson & Johnson).\n");

console.log("Fim da entrevista, Obrigado!");