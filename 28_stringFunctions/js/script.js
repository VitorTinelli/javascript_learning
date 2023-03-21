// length

var nome = "Vitor";
console.log(nome.length); //R: 5

//indexOf:

console.log(nome[2]); //R: t

var frase = "O caido sempre se levanta"; //assim mostra o indice da primeira letra da palavra sempre
console.log(frase.indexOf('sempre')); //R: 8

//last IndexOf

var frase = "O caido sempre se levanta sempre"; //assim mostra o indice da primeira letra da palavra última palavra sempre
console.log(frase.lastIndexOf('sempre')); //R: 8

//slice 

var sempre = frase.slice(frase.indexOf('sempre'), 14); //R: sempre
console.log(sempre);

var novaFrase = frase.replace('sempre', 'nunca');
console.log(novaFrase);