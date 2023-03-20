//objeto number é o pai dos numeros
//maioria dos objetos tem um objeto pai (String, Object, Array)

//parseFloat

console.log(parseFloat('12.00989'));
console.log(Number.parseFloat('12.00989'));

//parseInt

console.log(parseInt('10'));
console.log(Number.parseInt('20.32')); //arredonda virgula

//toFixed
console.log(123.2131231.toFixed(1));

//isNaN
console.log(isNaN("teste")); //não trata como um número
console.log(isNaN(12));
console.log(isNaN("12")); //trata como um numero

//MAX_VALUE MIN_VALUE

console.log(Number.MAX_VALUE); //R: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); 

console.log(1.7976931348623157e+309) //trata como Infinity