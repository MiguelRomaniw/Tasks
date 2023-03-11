let numeros = [2, 19, 42, 5, 77];

// utilizamos o metodo SORT dentro do numeros para ordenar em ordem crescente, onde declaramos dois argumentos, o argumento A e o argumento B
numeros.sort((a, b) => {

    // o metodo sort ele vai comparar o A dentro de numeros com o B, caso a REDUÇÃO de A por B seja negativa, ele vai retornar TRUE deixando sempre o A na primeira posição, e caso ele retorne um numero POSITIVO ele vai retornar false, pois se der uma redução positiva, sabemos que o primeiro numero é maior que o segundo, entao ele vai alterar a posição do A com o B, caso ele retorne 0 ele nao faz alteração nenuma pois os numeros são iguais
    return a - b
});

let soma = numeros[0] + numeros[1]
console.log(soma)