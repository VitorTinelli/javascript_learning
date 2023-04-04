//clearTimeout
var x = 0;

var myTimer = setTimeout (function(){
    console.log("O x é 0" );
}, 1500)

var x = 5;

if (x > 0){
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}

//clearInterval
var myInterval = setInterval(function(){
    console.log("Imprimindo interval");
}, 500)

setTimeout(function(){
    console.log("Não quero mais repetir");
    clearInterval(myInterval);
}, 1500)