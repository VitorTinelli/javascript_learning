//baseado em regras do CSS

var itensClasse = document.getElementsByClassName('itens');
console.log(itensClasse);

//querySelectorAll
var itensQuerry = document.querySelectorAll('#lista2 li');
console.log(itensQuerry);
var itensQuerry2 = document.querySelectorAll('#lista .itens');
console.log(itensQuerry);


//querySelector (Pega apenas o primeiro elemento que encontrar)
var itensQuerry3 = document.querySelector("#lista .itens");
console.log(itensQuerry3);

var primeiraLista = document.querySelector('ul');
console.log(primeiraLista);

var span = document.querySelector("#paragrafo span");
console.log(span)