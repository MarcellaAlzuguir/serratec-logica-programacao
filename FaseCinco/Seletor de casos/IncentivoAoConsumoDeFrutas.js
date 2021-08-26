const prompt = require("prompt-sync")();

console.log("Curiosidade sobre as frutas")
console.log("1 - Abacate,  2 - Cajá, 3 - Uva, 4 - Limão, 5 - Maracujá, 6 - Mamão");

const fruta = prompt("Quer saber uma curiosidade sobre uma das frutas acima? Digite o número correspondente: ");

switch (fruta){
    case "1":
        console.log("O abacate auxilia na redução de gordura corporal");
        break;
    case "2":
        console.log("O cajá contém vitamina C, o que lhe confere potencial antioxidante e fortalece o sistema imunológico.");
        break;
    case "3":
        console.log("A uva é rica em carboidratos, por isso é uma fruta altamente energética.");
        break;
    case "4":
        console.log("O limão É um diurético natural, que aumenta o volume da urina e estimula os rins, reduzindo o risco de infecções causas por bactérias.");
        break;
    case "5":
        console.log("O maracujá é pouco calórico, mas é mais conhecido por conter um calmante natural, a passiflorina.");
        break;
    case "6":
        console.log("O mamão é fonte de vitamina A, importante para a saúde da pele, dos cabelos, das unhas e da visão. ");
        break;
    default:
        console.log("Frutas são alimentos saudáveis, possuem uma grande variedade de vitaminas, minerais e fibras. Por essa razão, o seu consumo ajuda a prevenir diversos tipos de doenças.");
        break;
}