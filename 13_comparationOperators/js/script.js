//  ==, =!, >, <, >=, <=
// devolve um valor true ou false

var possuiCarro = true; // ou = 1
var idade = 18;

if (idade >= 18){
    console.log("Usuário pode tirar a carteira!")
}

if (idade < 18){
    console.log("Usuário não pode tirar carteira!")   
}

if (possuiCarro){
    console.log("Usuário pode andar de carro")
}

var nome = "Vitor"

if (nome == "Vitor"){
    console.log("O seu nome é Vitor")
}
if (nome =! "Vitor"){
    console.log("O seu nome não é Vitor")
}