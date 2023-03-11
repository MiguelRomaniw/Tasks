function getMiddle(s){
    let texto = s
    let comprimento = texto.length /2
    let comprimentoImpar = Math.floor(comprimento)  
    if(texto.length % 2 === 0) {
        return texto[comprimento-1]+texto[comprimento]
    } else {
        return texto[comprimentoImpar] 
    }
}






console.log(getMiddle("middle"))