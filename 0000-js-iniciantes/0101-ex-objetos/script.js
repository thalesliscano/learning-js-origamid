// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let pessoa = {
    nomeCompleto: "Thales Liscano Carvalho",
    idade: 23,
    amor: "Beatriz",
    mostrarNomeCompleto(){
        console.log(this.nomeCompleto);
    },
}
// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.mostrarNomeCompleto()
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro);
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let cachorro = {
    raca: "Labrador",
    cor: "Preto",
    idade: 10,
    LatirAoVerUmHomem(){
        console.log("Au au aua uauauuauu au ua ua uau uau aua ");
    }
}
console.log(cachorro);
cachorro.LatirAoVerUmHomem();
