// lenght
var arr = [1, 2, 3, 4 , 5];

console.log(arr.length);

//push
arr.push(6);
arr.push('Adicionando no fim do arr');
console.log(arr);

//pop
arr.pop(); //remove o ultimo
console.log(arr);

//unshift
arr.unshift(0); //adiciona no primeiro
arr.unshift('teste');
console.log(arr);

//shift
arr.shift(); //remove o primeiro
console.log(arr);

console.log(arr[arr.length - 1]) //printar o ultimo

//isArray

console.log(Array.isArray(5))
console.log(Array.isArray(arr))
