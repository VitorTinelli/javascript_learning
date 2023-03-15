//Arrays são considerados objetos, mas servem como listas
//podem receber qualquer tipo de dado
//sem chave e valor, e sim indice

var array = [1, "Vitor", false]; //usar chaves para criar arrays, obj {}
console.log(array); //primeiro indice é sempre o 0

var numeros = [2,3,4,5,6,7,8];
console.log(numeros);

console.log(array[1]); //acessar um item especifico (nesse caso Vitor)

array[3] = "Assim eu adiciono algo ao array" //para criar colocar o proximo indice
console.log(array)

array[2] = "Assim eu modifico algo no array" //para modificar especificar o indice

console.log(typeof array); //não é dataType e sim um objeto