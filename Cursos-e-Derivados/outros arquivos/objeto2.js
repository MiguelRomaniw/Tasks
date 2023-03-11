let pessoa = {
    nome: "Miguel",
    idade: 23,
    endereço: "Palmas - TO",
    saudacao: function() {
        console.log("olá", this.nome, "seja bem vindo" );
    }
}
pessoa.saudacao();