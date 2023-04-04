//setTimeout
console.log("Antes do setTimeout")
setTimeout(function(){
console.log("Testando o timeout")
}, 5000);

console.log("Depois do setTimeout")

//setInterval - Fica repetindo até falar pra parar
setInterval(function(){
    
    console.log("Testando setInterval")
}, 2000);