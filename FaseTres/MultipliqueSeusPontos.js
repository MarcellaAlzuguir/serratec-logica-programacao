const prompt = require("prompt-sync")();

qCupons = prompt("Digite sua quantidade de cupons: ");

qPontos = qCupons * 3;

console.log("De acordo com seus cupons, você tem " + qPontos + " pontos no programa de fidelidade!");