//break - encerrar a instrução
//continue - pular a instrução
//usado em loops

for (x = 10; x > 0; x--){

    if (x === 5){
        break;
    }

    console.log("Contador: " + x);
}
console.log("Deu o break!")

x = 10;
while (x < 100){
x += 10;

if (x === 60 || x === 90){
    console.log("Continue")
    continue;
}

console.log("Contador: " + x)
}