let loja = {
    nome: "fina mistura",
    endereco: "reversa do iguaçi",
    roupas: ["blusa", "calça", "tenis"],
    adicionar: function(nova){
        this.roupas.push(nova);
    }
}
loja.adicionar("lagge");
console.log(loja.roupas);

//Sim, sua resposta está correta! A função adicionar foi implementada corretamente para adicionar um novo item ao array roupas. Quando você chama loja.adicionar("lagge"), você está adicionando o item "lagge" ao array roupas e, em seguida, imprimindo o array completo no console.