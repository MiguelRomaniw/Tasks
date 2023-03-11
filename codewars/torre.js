function towerBuilder(nFloors) {

    // primeiro declaramos uma variavel que vai ser responsavel por criar a "base" da piramede, e posteriormente vai ser utilizado para criar a piramede em si
    let baseInicial = "*".repeat(nFloors *2 +1)
    
    // aqui declaramos uma variavel vazia que vai receber a piramede em si
    finalizado = []

    // aqui colocamos a base da piramede formado o array[0]
    finalizado.push(baseInicial)

    // aqui iniciamos a construção da torre, que os andares dela vai ser a metade do comprimento menos 1
    for(i = 0; i < finalizado[0].length /2 -1; i++){
       
        // aqui colocamos o inicio da torre, que vai ser sempre o "I"
        let inicio = i

        // e aqui o final da torre,
        let fim = finalizado[0].length - i -1
        
        // e aqui criamos a torre em si, que vai ser essa const, iniciando com ESPAÇO repetidas pelo numeros de I ai utilizamos o slice para recortar apenas os asteriscos necessarios, e adicionamos os ESPAÇOS ao final
        const novoArr = " ".repeat(i) + finalizado[0].slice(inicio +1, fim) + " ".repeat(i)
        
        // e por fim atribuimos ao finalizado declarado lá em cima, criando a piramede em si
        finalizado.push(novoArr)
    }
    
    // aqui invertemos o array e removemos o ultimo elemento dele
    finalizado.reverse().pop()
    return finalizado
  }
console.log(towerBuilder(10))