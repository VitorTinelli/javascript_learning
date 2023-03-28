//identificar um elemento do HTML através de métodos

//by TagName
var titulo = document.getElementsByTagName("h1")[0];
console.log(titulo);

var lis = document.getElementsByTagName("li");
console.log(lis[3]);

//by ID
var paragrafo = document.getElementById("paragrafo");
console.log(paragrafo);

//by Class

var itensDaLista = document.getElementsByClassName('itens');
console.log(itensDaLista);