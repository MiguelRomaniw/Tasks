// aqui sem duvidas esta um dos desafios mais complexos até agora para mim, apesar de nao ter passado em todos os testes pela forma que eu fiz as mutiplicações, ele esta funcionando com uma pequena margem de erro de 1 segundo




function formatDuration (seconds) {

    // aqui fazemos um if que verifica se o valor é zero, caso ele seja 0, ele já retorna AGORA
    if(seconds == 0){
        return "agora"
    }

    // aqui definimos uma const chamada LIMITE que recebe o limite de segundos de cada tempo, um adendo para o ultimo que eu faço 10 elevado a MIL para dar um numero infinito
    const limite = [60, 3600, 86400, 31536000, 10**1000]

    // aqui temos o multiplos, que são utilizados para fazer a converção de segundos para minutos/horas/dias e assim sucessivamente, ela e declarada como let pois posteriormente vamos reordenar ela
    let multiplos = [1, 60 , 60, 24, 365, 1]

    // aqui declaramos o valor inicial que vai ser utilizado posteriormente para operações matematicas
    let valorInicial = seconds 
    
    // aqui temos uma variavel que sera responsavel por sempre armazenar o resto da divisão/multiplicação
    let restoDivisao = 0

    // e enfim começamos o codigo declarando um array que vai fazer o calculo inicial para adicionar a formatação correta, caso o numero passado seja DIA, ele vai fazer os calculos necessarios para converter de segundos para dia, caso seja minuto a mesma coisas e assim sucessivamente, e vai adicionar apenas o valor inteiro dentro do array
    let data = [ [ 'segundo', 0 ], [ 'minuto', 0 ], [ 'hora', 0 ], [ 'dia', 0 ], ['ano', 0]].reduce((valor, [tipo, numero], index, Array) => {

        // aqui iniciametne começamos a converter de segundos para o proximo valor considerando a ordem dos mutiplos, declarado anteriormente, cada vez que o loop rodar, ele vai fazer a divisão
        valorInicial /= multiplos[index]

        // aqui verificamos se a pessoa passou um valor que pode ser atribuido apenas nos segundos, como 1 ou 10, qualquer valor menor que 60
        if (valorInicial < 60 && index == 0){
            valor[tipo] = valorInicial
        }

        // aqui finalmente criamos o ARRAY que vai ser a saida final, onde valor[tipo], seria o index como segundos horas e etc, e atribuimos o valor 0 a ele
        valor[tipo] = Array[index][1]

        // aqui verificamos onde vai ser trabalhado, se o valor passado é menor que o limite para ele poder fazer as verificações
        if(seconds < limite[index] && valorInicial >= 1) {

            // aqui atribuimos o valor inicial ao array, por que ele vai ser feito o calculo posteriormente
            valor[tipo] = Math.floor(valorInicial)

            // aqui fazemos uma verificação para saber como vai ser definido o resto da divisão
            valorInicial - valor[tipo] < 1 ? restoDivisao = valorInicial - valor[tipo] : restoDivisao = 0;
        } 
        return valor
    }, []);

    // aqui revertemos o data e transformamos ele em array de arrays para poder trabalhar com ela posteriormente
    data = Object.entries(data).reverse()

    // aqui revertemos os multiplos e removemos o primeiro, que nao vai ser utilziado mais
    multiplos.reverse().slice(0, 1)

    // e aqui fazemos um for que vai remover os valores ZERADOS iniciais, e vai atribuir os valores posteriores, por exemplo, se no reduce foi adicionado apenas o dia, ele vai adicionar as horas, minutos e segundos
    for(i = 0; i < data.length; i++){

        // aqio verificamos se o valor inicial é zerado, caso seja, ele remove o valor, e tambem remove os multiplos
        if(data[0][1] < 1){
            data.splice(0 , 1)
            multiplos.splice(0, 1)
            i = 0
        } else {

            //aqui fazemos efetivamente o calculo, pegando o resto da divisão e multiplicando por seus respectivos valores, e adicionando a soma ao final como um valor inteiro
            restoDivisao *= multiplos[i]

            // aqui fazemos uma pequena verificação antes de adicionar o numero inteiro da multiplicação, pois estava tendo erros ao adicionar valores inteiros, ai arredondei para cima
            data[i][1] = (data.length - i) == 1 ? Math.round(restoDivisao) : Math.floor(restoDivisao)

            // aqui eu só formato novamente a variavel com os valores restantes 
            restoDivisao -= Math.floor(restoDivisao)
        }

        // aqui verificamos se o valor é maior que 1 para poder adicionar um S no final da palavra, por exemplo, minutos, segundos, horas e etc
        if(data[i][1] > 1 ){
            data[i][0] += "s"
        }
    }

    // aqui verificamos novamente se existe algum valor zerado, caso exista, ele remove o valor zerado
    for(i = 0; i < data.length; i++){
        if(data[i][1] == 0) {
            data.splice(i , i)
            i--
        }
    }

    // aqui declaramos a variavel resposta que vai ser retornada no final
    let resposta = ""

    // e todo esse for é utilizado para formatar a frase final e adicionar as virgulas e o restante no lugar correto
    for(i = 0; i < data.length; i++){

        // se for apenas 1 elemento, ele apenas adiciona sem formatação alguma
        if(data.length == 1){
            resposta = `${data[i][1]} ${data[i][0]}`
            
        // essa verificação é apenas para colocar o "e" no final
        } else if(data.length - i == 1){
            resposta += `e ${data[i][1]} ${data[i][0]}`
        
        // essa formata basicamente os minutos
        } else if(data.length - i == 2){
            resposta += `${data[i][1]} ${data[i][0]} `

        // essa formata os outros termos
        } else {
            resposta += `${data[i][1]} ${data[i][0]}, `
        }
        // eu sei que tudo isso poderia ser feito com if ternario, provavelmente posteriormente eu vou fazer isso, mas enfim
    }

    return resposta
  }


  console.log(formatDuration(100000))