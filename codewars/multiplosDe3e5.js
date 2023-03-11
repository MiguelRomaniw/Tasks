
function solution(number){

    // primeiro verificamos se o numero é menor que 3, pois como queremos apenas os multiplos de 3 e 5, nao faz sentido analizar os numeros menores que 3, caso ele seja menor, já retornamos 0
    if(number <= 3){
        return 0
    } else {

    // aqui declaramos um array que ira receber os multiplos de 3 e de 5 para posteriormente serem somados
        let resultado = []

        // aqui fazemos um for, para poder percorrer todos os numeros
        for(i = number-1; i > 0; i--){

        // aqui verificamos se o numero é um multiplo, se ele for, ele é adicionado ao array de resultados
        if(i % 3 == 0 || i % 5 == 0) {
                resultado.push(i)
            }
    }
    
    // aqui fazemos uma variavel de apenas UMA LINHA que ira percorrer o array criado, e ira somar todos os itens, adicionando esses valores em uma variavel comum
    let fim = resultado.reduce((atual, proximo) => atual += proximo)
    return fim
    }  
}

console.log(solution(2))