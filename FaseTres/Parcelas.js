jogos = 345.00;
console.log("Jogos ............  R$" + jogos.toFixed(2));
videoGame = 1545.00;
console.log("Videogame ........ R$" + videoGame.toFixed(2));
juros = (jogos + videoGame) * (1.5/100);
sJuros= jogos + videoGame;
console.log("Total da compra .. R$" + sJuros.toFixed(2));
cJuros = jogos + videoGame + juros;
x3 = sJuros/3;
x5 = sJuros/5;
x10 = cJuros/10;

console.log("Você tem 3 opcões de parcelamento: ");
console.log("3x de R$" + x3.toFixed(2) + " sem juros, total de: R$" + sJuros.toFixed(2));
console.log("5x de R$" + x5.toFixed(2) + " sem juros, total de: R$" + sJuros.toFixed(2));
console.log("10x de R$" + x10.toFixed(2) + " com juros de 1,5%, total de: R$" + cJuros.toFixed(2));