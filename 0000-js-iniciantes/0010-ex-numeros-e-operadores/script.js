// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);
// Crie duas expressões que retornem NaN
let valor1 = "true";
let valor2 = 8;
console.log((valor1 + valor2) / 2);
// Somar a string '200' com o número 50 e retornar 250
let v200 = '200';
let v50 = 50;

let soma2 = Number(v200) + v50;
console.log(soma2);

// Incremente o número 5 e retorne o seu valor incrementado
soma2 += 5;
console.log(soma2);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = Number(peso.replace("kg","")) / 2; // NaN (Not a Number)
console.log(`Peso: ${pesoPorDois}kg`)