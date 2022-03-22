const peso1 = 1.0;
const peso2 = Number(2.0);

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 64.5;
const avaliacao2 = 57.3;

console.log(avaliacao1, avaliacao2);
console.log(Number.isInteger(avaliacao1));
console.log(Number.isInteger(avaliacao2));

const total = avaliacao1 * peso1;
const media = avaliacao2 * peso2;

console.log(total);
console.log(media.toFixed(2));  //ToFixed serve para fixar o numero das casas decimais que quer mostrar no codigo
console.log(total.toString(2))


// CASOS ESTRANHOS NUMERICOS //
console.log(7 / 0); //Valor infinito!
console.log("10" / 2); //Mesmo sendo string o vs reconhece como numero