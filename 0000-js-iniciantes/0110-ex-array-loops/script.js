// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let anosCopasBrasil = ["1959", "1962", "1970", "1994", "2002"];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
anosCopasBrasil.forEach((item)=>{
    console.log(item);
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(let i = 0; i < frutas.length; i++){
    if(frutas[i] === "Pera"){
        console.log(frutas[i]);
        break;
    } else{
        console.log("Não é pera")
    }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFrutaArray = frutas[4];
console.log(frutas);
console.log(ultimaFrutaArray);
console.log(frutas);

// retor prestar atenção em questoes de escopo e declarações de variáveis