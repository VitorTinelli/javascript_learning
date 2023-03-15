//Chave e valor
//guardar conjunto de valores

var obj = {
    nome: "Vitor",
    idade: 16,
    profissao: "Programmer",
    estarTrabalhando: false,
};

console.log(obj);
console.log(typeof obj);

console.log("O meu nome é: "+obj.nome);  

obj.nome = "Vitão"; //da pra mudar o valor do objeto  
console.log("Agora eu mudei para: " + obj.nome)

obg.graduacao = false; //posso criar outras propriedades no objeto
console.log(obj);