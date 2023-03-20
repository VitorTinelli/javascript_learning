//com let e const pode-se criar escopo até em instruções como if

let x = 12;

x = 5

const y = 10;

//y = 100; //não consigo mudar o valor da constante

console.log (x)
console.log ('const: '+y)
if (true){
    let x = 20; //criei um escopo local com o let
    
    console.log(x);

    const y = 60;

    console.log('const: '+y)
}

console.log(x)

for (let x = 0; x < 10; x++){
    console.log('cont local:',x);
}

console.log(x);