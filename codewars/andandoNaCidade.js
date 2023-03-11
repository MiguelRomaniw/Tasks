function isValidWalk(walk) {
    
    // primeiro declaramos um objeto para que posteriormente ele seja utilizado para marcar o numero de passos percorrido para cada direção
    let bussula = {
        norte : 0,
        sul : 0,
        leste: 0,
        oeste: 0
    }
   
    // aqui temos uma lista de passos oposta que é utilizada para reduzir passos nas direções opostas dentro do for
    let bussulaOposta = {
        norte: "sul",
        sul: "norte",
        leste: "oeste",
        oeste: "leste"
    }
    let direcoes = walk
    
    // aqui fazemos um for que vai percorrer o caminho, e ao mesmo tempo esse for vai fazer as alterações no objeto bussula, marcando exatamente a posição dele, se fossem pixels na tela, teriamos a posição exata do mesmo
    for(i = 0; i < direcoes.length; i++){
     
        //aqui declaramos a posição atual e a oposta, e dinamicamente colocamos os contadores dentro do do objeto bussula, com essa estrutura o objeto bussula poderia ter 1000 itens e ele colocaria corretamente dentro dos mil itens 
        let atual = direcoes[i]
        let oposta = bussulaOposta[direcoes[i]]
        bussula[atual] += 1
        bussula[oposta] -= 1
    }

    // aqui temos uma estrutura de repetição que verificam os dados internos dinamicamente dentro do objeto bussula, caso qualquer um deles seja maior que 0 ele retorna falkse
    for(let dir in bussula){
        if(direcoes.length !== 10 || bussula[dir] !== 0){
            return false
        } else {
           return true
        }
    }

}
console.log(isValidWalk(['norte','sul','norte','sul','norte','sul','norte','sul',"norte", "norte"]))
