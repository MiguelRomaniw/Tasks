function solution(list){

    // declaramos a variavel position que vai ser responsavel por marcar o indice de onde esta o for
    let position = 0
    
    // essa variavel vai receber o array final que posteriormente vai ser tratado para o return
    let arrayFinal = []
    
    // essa variavel vai servir de suporte para armazenar os elementos prontos que serão enviados para o array final
    let sequencia = []

    // com esse FOR separamos os elementos em sequencia, atravéz dele separamos os que estão dentro da sequencia e os que estão fora da sequencia
    for(i = list[0]; i <= list[list.length -1]; i++){
        
        // aqui fazemos a primeira verificação, se o valor é igual a I, entao ele é armazenado na variavel sequencia
        if(list[position] == i){
            sequencia.push(list[position])

            // aqui verificamos se estamos no ultimo elemento do array, para que seja enviado a sequencia para o arrai final
            if(position == list.length -1){
                arrayFinal.push(sequencia)
            }
        } else{

            // se nao for, enviamos a sequencia para a variavel final
            arrayFinal.push(sequencia)
            
            // resetamos a variavel sequencia e deixamos ela com os valores que não cumprem os criterios agora
            sequencia = [list[position]]

            // e setamos o valor do i com a nova posição
            i = list[position]
        } 
    position ++
    }
    console.log(arrayFinal)
    // setamos a variavel sequencia agora como uma string, para podermos trabalhar com ela, e enviar como resposta posteriormente
    sequencia = ""
    for(i = 0; i < arrayFinal.length; i++){

        // aqui verificamos se o subarray é maior ou igual a tres, caso a sequencia seja maior ou igual a trez, aplicamos a formatação da string, caso contrario, apenas adicionamos os elementos
        arrayFinal[i].length >= 3 ? sequencia += `${arrayFinal[i][0]}-${arrayFinal[i][arrayFinal[i].length-1]},` : sequencia += `${arrayFinal[i]},`
    }

    // aqui utilizamos o endsWith para verificar se o ultimo elemento é uma virgula, caso seja, removemos, caso nao seja apenas enviamos a sequencia como ela esta
    return   sequencia.endsWith(",") ? sequencia = sequencia.slice(0, -1) : sequencia;
}





console.log(solution([-3, -2, -1,  2, 10, 15, 16, 18, 19, 20]))