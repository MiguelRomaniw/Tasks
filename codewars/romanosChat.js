const romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  
  const romanosSa = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  
  let romanToInt = function(s) {
    let soma = 0;
    let parametros = s.split("");
  
    for (i = 0; i < parametros.length; i++){
      let valorAtual = romanos[parametros[i]];
      let valorProximo = romanos[parametros[i + 1]];
      console.log(valorAtual)
      console.log(valorProximo)
  
      if (valorProximo && valorAtual < valorProximo) {
        console.log(valorAtual)
        console.log(valorProximo)
        
        soma += romanosSa[parametros[i] + parametros[i + 1]];
        i++;
      } else {
        soma += valorAtual;
      }
    } 
    console.log(parametros)
    return soma;
  }

 console.log(romanToInt("IIV"))