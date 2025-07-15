// conteudos// Crie uma função para verificar se um valor é Truthy
function verificar(valor){
    if (Boolean(valor)){
        console.log("Valor é verdadeiro!");
    } else{
        console.log("Valor é falso!");
    }
}
verificar("")

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calcPerimetro(lado1, lado2){
    let perimetro = 2 * (lado1 + lado2);
    console.log(perimetro);
}
calcPerimetro(8, 12);
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return nome + " " + sobrenome;
}
console.log(nomeCompleto("Thales", "Liscano"));
// Crie uma função que verifica se um número é par
function verificaNumeroPar(numero){
    if(numero % 2 == 0){
        console.log("Número é par!");
    } else{
        console.log("Número ímpar!");
    }
}
verificaNumeroPar(6.4);
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificarTipo(valor){
    return typeof(valor);
}

console.log(verificarTipo(21));
console.log(verificarTipo("21"));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", ()=>{
    console.log(nomeCompleto("Thales", "Liscano"));
})

// Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);
