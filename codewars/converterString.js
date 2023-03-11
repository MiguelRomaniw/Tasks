function duplicateEncode(word) {
  let letras = word.toLowerCase().split("");
  let formatado = [];
  let verificacao = [];
  letras.map((value, index, array) => {
      if(verificacao.indexOf(value) == -1 && array.indexOf(value, index +1) == -1){
        verificacao.push(value);
        formatado.push("(");
      } else {
        verificacao.push(value);
        formatado.push(")");
      };
      return formatado;
  });
  
  formatado = formatado.join("");
    return formatado;
  };

  console.log(duplicateEncode("Success"));