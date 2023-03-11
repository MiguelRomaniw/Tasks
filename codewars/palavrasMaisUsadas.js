function topThreeWords(text) {

    // primeiro tratamos o texto recebido, removendo os caracteres invalidos, e em seguida, transformamos a string tratada em um array de arrays
    let texto = text.toLowerCase().replace(/[^a-zA-Z ']/g, '').split(' ');

    // aqui utilizamos o metodo reduce para contar quantas vezes cada palavra apareceu, e remover os itens que são nulos, aqui sera retornado um objeto
    let obj = texto.reduce((valor, valorAtual) => {
        if (valorAtual && valorAtual.trim() !== '' && valorAtual.trim() !== "'") {
            valor[valorAtual] ? valor[valorAtual]++ : valor[valorAtual] = 1;
        }
        return valor;
    }, {});

    // aqui tratamos o objeto, primeiro convertendo ele para array de arrays, e depois ordenando do maior para o menor, e por ultimo, separamos apenas os 3 menores valores
    let ordenado = Object.entries(obj).sort((a, b) => b[1] - a[1]).reduce((valor, index) => {
            if (valor.length < 3) {
                valor.push(index[0]);
            }
            return valor;
        }, []);
    return ordenado;
}


/*function topThreeWords(text) {
    let texto = text.toLowerCase().replace(/[^a-zA-Z ']/g, '').split(' ');
    let obj = texto.reduce((valor, valorAtual) => (valor[valorAtual] ? valor[valorAtual]++ : valor[valorAtual] = 1, valor), {})
    let ordenado = Object.entries(obj).sort((a, b) => b[1] - a[1]).reduce((valor, index) => {
        if(valor.length < 3){
            valor.push(index[0])
        }
        return valor
    }, [])
    return ordenado
}*/

console.log(topThreeWords("  '  "));