var ler = require("prompt-sync")();

var idade = ler ("Qual a sua idade? ");

if(idade >= '67'){
    if(idade == '67'){
    console.log("\nVacinação hoje.\n");
    }else{
        console.log("\nPor quê não vacinou ainda? \n");
    }
}else{
    console.log("\nVolte na próxima semana.\n");
}