function findOdd(A) {
    let nome = A

    // Fazemos um reduce, onde o soma vai ser o proprio objeto, e tambem ele é responsavel pela soma do objeto declarado pelo nunAtual
    let objeto = nome.reduce((soma, nunAtual) => {
        
        // nessa variavel declaramos o numero atual em que o Looop esta rodando, teoricamente, é o proximo valor, mas a semantica do momento diz ser o valor atual
        let index = nunAtual

        // aqui verificamos com esse if se o valor trabalhado no momento, já existe no objeto, caso ele exista, localizamos ele pelo index, e adicionamos mais um
        if(soma[index]){
            soma[index]++

        // caso ele nao seja localizado dentro do objeto que esta sendo criado "objeto soma", ele é criado, com o nome index e adicionado 1 a ele
        } else {
            soma[index] = 1
        }
        return soma
    }, {})

    // aqui fazemos um for utilizando a tecnica de for in, onde declaramos uma variavel para ser o index, e o in diz que estamos trabalhando INTERNAMENTE dentro do objeto em questão
    for(let ind in objeto){
        
        // aqui fazemos uma verificação para ver se o valor da propriedade ind é par ou impar
        if(objeto[ind] % 2 === 1){
           
        // ai aqui retornamos a PROPRIEDADE, ou o VALOR DO INDICE, e utilizamos o parseint para retornar um NUMERO e nao uma STRING
            return parseInt(ind);
        }
    }
  }

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))