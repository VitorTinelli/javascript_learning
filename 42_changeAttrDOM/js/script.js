var title = document.querySelector("#title");

//inserir Atributos
title.setAttribute("class", "testandoAtributos");

var button = document.querySelector("button");
button.setAttribute("class", "botaoTeste");

button.setAttribute("disabled", "disabled")

//removerAtributos
var lista = document.querySelector("#lista")

lista.removeAttribute("id")