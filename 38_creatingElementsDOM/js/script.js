//Inserir no body

var novoParagrafo = document.createElement("p");
var text = document.createTextNode("Este é o conteudo do paragrafo");

novoParagrafo.appendChild(text);

console.log(novoParagrafo);

var body = document.querySelector('body');
body.appendChild(novoParagrafo);

//inserir em um conteiner

var container = document.querySelector("#container");
console.log(container)
var el = document.createElement('span');
el.appendChild(document.createTextNode('Texto do span'));
console.log (el)
container.appendChild(el)