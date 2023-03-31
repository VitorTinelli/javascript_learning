//replaceChild
var el = document.createElement("div");
el.classList = "testingClass";
var texto = document.createTextNode("Este é o texto replaceChild")

el.appendChild(texto);
console.log(el);

//selecionar elemento para trocar
var title = document.querySelector("#title");
console.log(title);

//selecionar o pai do elemento
//var body = document.querySelector("body"); //ou
var pai = title.parentNode;

//trocar os elementos
pai.replaceChild(el, title)



