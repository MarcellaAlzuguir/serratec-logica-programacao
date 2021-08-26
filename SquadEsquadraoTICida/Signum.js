/* Olá, dev. Estou criando um novo mapa astral para minhas previsões astrológicas. Para isso, os signos serão remodelados conforme a seguir:Quem nasceu no 1º trimestre do ano será do signum mar, quem nasceu no 2º trimestre será terra, no 3º trimestre será Sol e por fim, no 4º trimestre, será lua. 
Preciso que colete a data de nascimento mas eu não preciso do ano, somente do dia e o mês. Após o usuário informar sua data o sistema deve dizer qual signum. Por fim, faça uma pesquisa de satisfação para saber se ele gostou ou não gostou.*/

const prompt = require('prompt-sync')();

console.log ("Olá, sou a Zora! Estou aqui para lhe informar que os signos agora viraram elementos da natureza!");
var mes = prompt("Para saber qual é o seu, por favor, insira o mês de seu nascimento: ");

var mar = (mes == 1) || (mes == 2) || (mes == 3);
var terra = (mes == 4) || (mes == 5) || (mes == 6);
var sol = (mes == 7) || (mes == 8) || (mes == 9);
var lua = (mes == 10) || (mes == 11) || (mes == 12);

if (mar){
    console.log ("Seu signum é MAR!");
}
else{
    if (terra){;
    console.log("Seu signo é TERRA!");
}
    else{
    if(sol){;
    console.log ("Seu signo é SOL!");
}
else{
    if(lua){;
        console.log ("Seu signo é LUA!");
    }
}
}
}

pesquisa = prompt("Você gostou de saber seu signo elemento da natureza? Digite 'S' para sim ou 'N' para não: ");

