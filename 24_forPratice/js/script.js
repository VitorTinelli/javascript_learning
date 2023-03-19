var arr = ["Limão", "Maça", "Pera", "Melancia", "Uva"]

var arrul = document.createElement('ul');

var body = document.getElementsByTagName('body');

console.log(body[0]);
body[0].appendChild(arrul);

var arrNoBody = document.getElementsByTagName('ul');

console.log(arrNoBody[0]);

for (var x = 0; x < arr.length; x++){

    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(arr[x]);

    liFor.appendChild(textoLi);

    //console.log(arr[x]);

    arrNoBody[0].appendChild(liFor);

}