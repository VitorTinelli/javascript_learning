//podemos ter vários escopos
//global (iniciado em toda aplicação)
//local (em várias instruções como as funções)

var x = 1;

var y = 3;

console.log(x, y);


function teste(){
    var z = 0;

    console.log(z);

    console.log(x); //global pode entrar em functions
} 

teste();

//console.log(z); //aq não está definido pois ela é local da função teste

function teste2(){
    var z = 5;

    console.log(z) //nao vai sobrepor a outra Z pois essa é local da teste2
}

teste2();

if (true){
    var p = "pedro"; //if não tem variavel local
}
console.log(p);