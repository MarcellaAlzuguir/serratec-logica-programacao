var ler = require("prompt-sync")();

limite = 10;

pessoas = ler("Quantas pessoas estão dentro da loja?");

if (pessoas < limite){
    console.log("O próximo cliente pode entrar!");
}
else {
    console.log("A loja esta cheia, aguarde!");
}