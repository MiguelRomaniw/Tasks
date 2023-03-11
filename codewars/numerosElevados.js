function comp(array1, array2) {

    // aqui utilizamos o !Array.isArray para verificar se os arrays são realmente um array, caso eles não sejam um array, é retornado false
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
      return false; // um dos parâmetros não é um array
    }

    // aqui verificamos se os arrays tem algo dentro ou se são "vazios" ou se eles possuem ZERO, caso seja o caso, retorna true, nao sei por que o codigo pede isso mas era pra retornar TRUE
    if (array1.length === 0 && array2.length === 0) {
      return true; // ambos são arrays vazios
    }

    // aqui atribuimos a variavel a o primeiro array, e ordenamos em ordem crescente, e fazemos isso com o segundo tambem
    let a = array1.sort((a, b) => a - b);
    let b = array2.sort((a, b) => a - b);

    // aqui utilizamos o MAP para elevar o valor de A ao quadrado e colocamos dentro da variavel QUADRADO
    let quadrado = a.map((valor) => valor *= valor);

    // aqui utilizamos o EVERY para fazer uma verificação de valores, ou seja, ele verifica se os valores de A são exatamente iguais os valores de B, caso seja, ele retorna TRUE, caso nao sejam iguais, ele retorna FALSE
    if(quadrado.every((valor, indice) => valor === b[indice])){
        return true
    } else {
        return false
    }
}  


console.log(comp([], []))