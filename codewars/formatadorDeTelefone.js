function createPhoneNumber(numbers){


    //primeiro criamos uma variavel que ira receber os dados de retorno   
    let formato = [];


    // depois fazemos um LOOP de repetição, que alem de formatar o telefone na formatação ideal, ele vai percorrer o array passado como parametro da function
    for(i = 0; i < numbers.length; i++){


        //inserimos as () e o - atravez de if considerando a quantidade de itens dentro do array  formato criado
        if (formato.length == 0){
            formato.push("(")
        }

        if (formato.length == 4){
            formato.push(") ")
        }
        if (formato.length == 8){
            formato.push("-")
        }


    //aqui adicionamos os numeros passados como parametros dentro do array e já vai se formatando automaticamente
        formato.push(numbers[i]);
    }


    // aqui transformamos o array formato em uma string para posteriormente poder tratala 
    formato = formato.toString()


    //aqui removemos as virgulas apos o tratamento do array
    formato = formato.replace(/,/g, "");
    return(formato)

}


console.log(createPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))



