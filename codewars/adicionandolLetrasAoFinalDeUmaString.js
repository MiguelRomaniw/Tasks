function pigIt(str){

    // primeiro transformamos a string em um array com o metodo split e depois criamos um array vazio que vai ser utilizado posteriormente
    let mod = str.split(" ")
    let inicialAy = []

    // aqui fazemos um FOR que vai percorrer o array criado e durante esse processo, vamos fazer as alterações necessarias
    for(i = 0; i < mod.length; i++){
        
        // aqui verificamos se o array possue espaços, ou acentuação, caso sim, ele simplismente coloca esses elementos no array sem alteração
        if(/[^\w\s]/.test(mod[i])){
            inicialAy.push(mod[i])
        } else {

            // aqui declaramos uma variavel, que vai receber primeiramente a frase sem a primeira letra dela, utilizando o slice, "removemos" a primeira letra antes de adicionar, e posteriormente concatenamos ao final com a primeira letra
            let letra = mod[i].slice(1) + mod[i][0]

            // e aqui concatenamos o AY no final da string, e enviamos ela para o array criado anteriormente
            inicialAy.push(letra+"ay")
        }
    }

    // aqui utilizamos o metodo JOIN para transformar o nosso array em string, e substituindo a VIRGULA por um ESPAÇO
    let final = inicialAy.join(" ")
    return final
  }

  
  console.log(pigIt('Hello world !'))

