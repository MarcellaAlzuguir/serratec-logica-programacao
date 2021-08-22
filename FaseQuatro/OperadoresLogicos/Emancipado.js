const prompt = require("prompt-sync")();

sexo = prompt("Sexo: ")
anoNascimento = prompt("Qual o seu ano de nascimento? ")

emancipado = ((sexo == 'Masculino') && (anoNascimento <= 2003)) || ((sexo == 'Feminino') && (anoNascimento <= 2000));

console.log("Emancipado: " + emancipado);