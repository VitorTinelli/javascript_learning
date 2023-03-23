//this fora de escopo local, se refere ao objeto global Window
//Em objetos se refere aquela instância
var teste = 4;
console.log(this);
console.log(this.teste);
console.log(teste)

let pessoa = {
    nome: "Vitor",
    idade: 17,
    falar: function(){
        console.log("Olá tudo bem?")
    },
    dizerNome: function(){
        console.log("O meu nome é: "+ this.nome)
    },
    aniversario: function(){
        this.idade += 1;
    },
};

pessoa.dizerNome();

console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);