let restaurante = {
    nome: "comida sem sabor",
    endereco: "rua sem saida",
    pratos: ["cebola", "couve flor", "ervilha"],
    adicionar: function (novo){
        this.pratos.push(novo);
    }
}

restaurante.adicionar("cebola roxa");
console.log(restaurante.pratos)

//Sim, sua resposta para o exercício 5 está correta. A função adicionar foi corretamente criada e utilizada para adicionar o prato "cebola roxa" ao array de pratos do objeto "restaurante". O resultado final é o esperado, com a impressão dos pratos incluindo o novo prato adicionado.